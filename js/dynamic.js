const numberValue  = document.querySelector("input");
const dynamicDivs = document.querySelector(".dynamic-divs");
const resetButton = document.querySelector(".reset");


numberValue.onchange = function () {

    const inputValue = this.value;

    dynamicDivs.innerHTML = "";

    for (let i = 1; i <= inputValue; i++) {
        dynamicDivs.innerHTML += `<div>${i}</div>`;
    }
};


function removeInput(){
    dynamicDivs.innerHTML = "";
    numberValue.value = "";
}
resetButton.onclick = removeInput;





    
 