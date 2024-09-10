let display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let isClickedComma = false

function appendToDisplay(value) {
    if (display.value.length >= 14) {
        return;
    }

    if (isSecondNumber) {
        display.value = value;
        isSecondNumber = false;
    } else {
        if (display.value === '0' && value !== ',') {
            display.value = value;
        } else {
            if (value === ',' && !isClickedComma) {
                display.value += value;
                isClickedComma = true;
            } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value)) {
                display.value += value;
            }
        }
    }

    if (currentOperator === '') {
        firstNumber += value;
    } else {
        secondNumber += value;
    }
}