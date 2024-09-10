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

function clearDisplay() {
    display.value = '0';
    history.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
}

function clearEntry() {
    display.value = '0';
    if (currentOperator === '') {
        firstNumber = '';
    } else {
        secondNumber = '';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
    if (currentOperator === '') {
        firstNumber = display.value;
    } else {
        secondNumber = display.value;
    }
}