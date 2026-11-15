"use strict";

const backgrounds = {
    "pink": "#f7dde9",
    "yellow": "#f3ecd2",
    "green": "#cdfdef",
    "red": "#f7d1d1",
    "blue": "#daeeffff",
    "purple": "#f5cfffff"
};
const themeContainer = document.querySelector(".themeContainer");
const palette = document.getElementById("palette");
const paletteOptions = themeContainer.querySelectorAll(".theme");
const container = document.querySelector(".calculatorContainer");
const rows = document.querySelector(".buttons");
const clear = document.querySelector(".acpink");
const erase = document.querySelector(".cepink");
const equals = document.querySelector(".equalpink");
const calculatorButtons = rows.querySelectorAll("button");
let currentTheme = "pink";
let open = false;

function changeTheme(theme) {
    container.classList.replace(currentTheme + "Container", theme + "Container");
    rows.classList.replace(currentTheme + "Buttons", theme + "Buttons");
    clear.classList.replace("ac" + currentTheme, "ac" + theme);
    erase.classList.replace("ce" + currentTheme, "ce" + theme);
    equals.classList.replace("equal" + currentTheme, "equal" + theme);
    calculatorButtons.forEach((button) => button.classList.replace(currentTheme, theme));
    document.body.style.backgroundColor = backgrounds[theme];
    currentTheme = theme;
}

themeContainer.addEventListener("click", (event) => {
    const option = event.target.closest(".theme");
    if (option) changeTheme(option.id);

    open = option ? false : !open;
    themeContainer.style.height = open ? "350px" : "";
    palette.style.display = open ? "none" : "";
    paletteOptions.forEach((item) => {
        item.style.display = open ? "flex" : "";
    });
});
