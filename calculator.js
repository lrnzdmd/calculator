let display;
let displayValue = "0";
let firstNumber = "0";
let secondNumber = "";
let operator = "";
let displaySwitch = false;

document.addEventListener("DOMContentLoaded", function() {
    display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");
    for (let i=0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("number")){
        buttons[i].addEventListener("click", function() {
            displayNumber(buttons[i].value);
        });
        }
        else if (buttons[i].classList.contains("delete")){
            buttons[i].addEventListener("click", function() {
                clearDisplay();
            });
        }
        else if (buttons[i].classList.contains("operator")){
            buttons[i].addEventListener("click", function(){
                setOperator(buttons[i].value);
            });
        }
        else if (buttons[i].classList.contains("equals")){
            buttons[i].addEventListener("click", function(){
                equalsOperate();
            });
        }
    }

});

function equalsOperate(){
    if (operator) {secondNumber = displayValue;}
    if (secondNumber !== "" && operator){
    displayValue = operate(firstNumber, secondNumber, operator);
    firstNumber = displayValue;
    display.innerHTML = displayValue;
    secondNumber = "";
    operator = "";
    displaySwitch = true;
    }

}

function setOperator(oper){
    if (operator) {
        secondNumber = displayValue;
    }



    if (secondNumber !== ""){
        firstNumber = operate(firstNumber,secondNumber,operator);
        secondNumber = "";
        operator = "";
        displaySwitch = true;
        displayValue = firstNumber;
        display.innerHTML = displayValue;
    }
    firstNumber = displayValue;
    operator = oper;
    displaySwitch = true;
}

function clearDisplay() {
    display.innerHTML = "0";
    displayValue = display.innerHTML;
}

function displayNumber(number) {

    if (displayValue === "0" || displaySwitch)
        {
            display.innerHTML = "";
            displayValue = "";
            displayValue += number;
            display.innerHTML = displayValue;
            displaySwitch = false;
            
        }
        else {

            if (displayValue.length <= 10) {displayValue += number;}
            display.innerHTML = displayValue;
        }
    
    }


function add(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) + parseFloat(secondNumber);
    return result; 
}

function subtract(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) - parseFloat(secondNumber);
    return result; 
}

function multiply(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) * parseFloat(secondNumber);
    return result; 
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) { 
        let result = "5318008"
    }
    let result = parseFloat(firstNumber) / parseFloat(secondNumber);
    return result; 
}

function operate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+":
            result = add(firstNumber,secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*": 
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    if (result.toString().includes(".")) 
        {   
            let leng = result.toString().split(".")[0].length;
            let decimals = 10 - leng;
            result = result.toFixed(decimals);            
        }
    
        return result.toString().length > 11 ? result.toString().slice(0,11) : result;
    

}