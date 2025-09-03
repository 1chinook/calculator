let props= document.querySelectorAll("button:not(#Off)");
let startButton = document.querySelector("#Off");
let isWorking = true;

props.forEach( button => {
        button.addEventListener("click", () =>{
            
})})


startButton.addEventListener("click", () => {
    if(isWorking){
        startButton.id = "On"
        isWorking = false;
        startButton.innerHTML = "ON"
    }
    else if(!isWorking){
        startButton.id = "Off";
        isWorking = true;
        startButton.innerHTML = "OFF"
    }
})