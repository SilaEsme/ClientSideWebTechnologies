const expressionButtons = document.querySelectorAll(".btn-calc");
const resultButton = document.querySelector("#btn-res");
const expressionText = document.querySelector("#text-calc");
const resultText = document.querySelector("#text-res");
const modes = document.querySelectorAll(".mode");
const modeLink = document.querySelector("#mode-link");

let expression = "";

expressionButtons.forEach((button) => { 
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML != "C"){
            expression += e.target.innerHTML;
            expressionText.innerHTML += e.target.innerHTML;
        }else{
            expression = "";
            expressionText.innerHTML = "";
            resultText.innerHTML="";
        }
    });
});

resultButton.addEventListener("click", (e) => {
    resultText.innerHTML = eval(expression);
    expression = "";
});

modes.forEach((mode) => {
    mode.addEventListener("click", (e) => {
        if(e.target.id === "light"){
            modeLink.setAttribute('href', "dark.css");
        }else if(e.target.id === "dark"){
            modeLink.setAttribute('href', "light.css");
        }
    });
});
