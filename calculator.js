"use strict";

const screen = document.querySelector(".screen");
const power = document.getElementById("Off");
const keys = document.querySelector(".buttons");
let enabled = false;
let entries = [];
let answer = 0;

function evaluateExpression(expression) {
    const tokens = expression.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|sqrt|[()+\-*/^!%]/gi) || [];
    if (tokens.join("") !== expression) throw new Error("Invalid expression");
    let index = 0;

    function consume(token) {
        if (tokens[index] !== token) return false;
        index += 1;
        return true;
    }

    function group() {
        if (!consume("(")) throw new Error("Expected opening parenthesis");
        const value = sum();
        if (!consume(")")) throw new Error("Missing closing parenthesis");
        return value;
    }

    function postfix() {
        let value;
        if (consume("sqrt")) {
            value = Math.sqrt(group());
        } else if (tokens[index] === "(") {
            value = group();
        } else {
            const token = tokens[index++];
            if (!token || !/^(?:\d|\.\d)/.test(token)) throw new Error("Expected a number");
            value = Number(token);
        }

        while (tokens[index] === "!" || tokens[index] === "%") {
            if (consume("%")) {
                value /= 100;
                continue;
            }
            index += 1;
            if (!Number.isInteger(value) || value < 0 || value > 170) {
                throw new Error("Invalid factorial");
            }
            let factorial = 1;
            for (let factor = 2; factor <= value; factor += 1) factorial *= factor;
            value = factorial;
        }
        return value;
    }

    function unary() {
        if (consume("-")) return -unary();
        if (consume("+")) return unary();
        const base = postfix();
        return consume("^") ? base ** unary() : base;
    }

    function product() {
        let value = unary();
        while (tokens[index] === "*" || tokens[index] === "/") {
            const operator = tokens[index++];
            const right = unary();
            value = operator === "*" ? value * right : value / right;
        }
        return value;
    }

    function sum() {
        let value = product();
        while (tokens[index] === "+" || tokens[index] === "-") {
            const operator = tokens[index++];
            const right = product();
            value += operator === "+" ? right : -right;
        }
        return value;
    }

    const result = sum();
    if (index !== tokens.length || !Number.isFinite(result)) throw new Error("Invalid result");
    return result;
}

power.addEventListener("click", () => {
    enabled = !enabled;
    power.id = enabled ? "On" : "Off";
    power.textContent = enabled ? "OFF" : "ON";
    entries = [];
    screen.value = enabled ? "0" : "";
});

const inputByLabel = { "−": "-", "x!": "!", sqrt: "sqrt(", pow: "^" };

keys.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button === power || !enabled) return;

    const label = button.textContent.trim();
    switch (label) {
        case "AC":
            entries = [];
            break;
        case "CE":
            entries.pop();
            break;
        case "ANS":
            entries.push(`(${answer})`);
            break;
        case "=":
            try {
                answer = evaluateExpression(entries.join(""));
                entries = [String(answer)];
            } catch {
                entries = [];
                screen.value = "Error";
                return;
            }
            break;
        default:
            entries.push(inputByLabel[label] ?? label);
    }
    screen.value = entries.join("") || "0";
});
