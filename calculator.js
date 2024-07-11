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

    return result;

}