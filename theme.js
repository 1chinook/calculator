let pinkTheme = document.getElementById("pink");
let yellowTheme = document.getElementById("yellow");
let greenTheme = document.getElementById("green");
let redTheme = document.getElementById("red");
let blueTheme = document.getElementById("blue");
let purpleTheme = document.getElementById("purple");
let buttons = document.querySelectorAll("button");
let container = document.querySelector(".pinkContainer");
let rows = document.querySelector(".pinkButtons");
let color = document.querySelector(".pink");
let ac = document.querySelector(".acpink");
let ce = document.querySelector(".cepink");
let equal = document.querySelector(".equalpink");
let themeContainer = document.querySelector(".themeContainer");
let palette = document.querySelector("#palette");
let theme = document.querySelectorAll(".theme");
let isOpen = false;


themeContainer.addEventListener("click", () => {
    if(!isOpen){
        themeContainer.style.height = "350px";
        palette.style.display = "none";
        isOpen = true;
        theme.forEach(t => {
            t.style.display = "flex";});
                pinkTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "greenButtons", "redButtons", "blueButtons", "purpleButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acpink");
                    ce.classList.add("cepink");
                    equal.classList.add("equalpink");
                    container.classList.add("pinkContainer");
                    rows.classList.add("pinkButtons");
                    document.body.style.backgroundColor = "#f7dde9"
                    buttons.forEach(button =>{
                        button.classList.remove("yellow", "green", "blue", "red", "purple");
                        button.classList.add("pink")});
                    })

                yellowTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "greenButtons", "redButtons", "blueButtons", "purpleButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acyellow");
                    ce.classList.add("ceyellow");
                    equal.classList.add("equalyellow");
                    container.classList.add("yellowContainer");
                    rows.classList.add("yellowButtons");
                    document.body.style.backgroundColor = "#f3ecd2"
                    buttons.forEach(button =>{
                        button.classList.remove("pink", "green", "blue", "red", "purple");
                        button.classList.add("yellow")});
                    })


                greenTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "redButtons", "blueButtons", "purpleButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acgreen");
                    ce.classList.add("cegreen");
                    equal.classList.add("equalgreen");
                    container.classList.add("greenContainer");
                    rows.classList.add("greenButtons");
                    document.body.style.backgroundColor = "#cdfdef"
                    buttons.forEach(button =>{
                        button.classList.remove("pink", "yellow", "blue", "red", "purple");
                        button.classList.add("green")});
                    })    

                redTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "redButtons", "blueButtons", "purpleButtons", "greenButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acred");
                    ce.classList.add("cered");
                    equal.classList.add("equalred");
                    container.classList.add("redContainer");
                    rows.classList.add("redButtons");
                    document.body.style.backgroundColor = "#f7d1d1"
                    buttons.forEach(button =>{
                        button.classList.remove("pink", "yellow", "blue", "green", "purple");
                        button.classList.add("red")});
                    })    
                    
                blueTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "redButtons", "blueButtons", "purpleButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acblue");
                    ce.classList.add("ceblue");
                    equal.classList.add("equalblue");
                    container.classList.add("blueContainer");
                    rows.classList.add("blueButtons");
                    document.body.style.backgroundColor = "#daeeffff"
                    buttons.forEach(button =>{
                        button.classList.remove("pink", "yellow", "red", "green", "purple");
                        button.classList.add("blue")});
                    })  

                purpleTheme.addEventListener("click", () =>{
                    container.classList.remove("pinkContainer", "yellowContainer", "greenContainer", "redContainer", "blueContainer", "purpleContainer");
                    rows.classList.remove("pinkButtons", "yellowButtons", "redButtons", "blueButtons", "purpleButtons");
                    ac.classList.remove("acpink", "acyellow", "acgreen", "acred", "acblue", "acpurple");
                    ce.classList.remove("cepink", "ceyellow", "cegreen", "cered", "ceblue", "cepurple");
                    equal.classList.remove("equalyellow", "equalgreen", "equalred", "equalblue", "equalpurple","equalpink");
                    ac.classList.add("acpurple");
                    ce.classList.add("cepurple");
                    equal.classList.add("equalpurple");
                    container.classList.add("purpleContainer");
                    rows.classList.add("purpleButtons");
                    document.body.style.backgroundColor = "#f5cfffff"
                    buttons.forEach(button =>{
                        button.classList.remove("pink", "yellow", "blue", "red", "green");
                        button.classList.add("purple")});
    })           
    }
    else if(isOpen){
        themeContainer.style.height = "60px";
        setTimeout(() => {
            palette.style.display = "block";
        }, 540);
        setTimeout(() => {
            palette.style.display = "block";
            theme.forEach(t => {
                t.style.display = "none";});
        }, 399);
        isOpen = false;
    }
}) 

