let display = document.getElementById('display');
let history = document.getElementById('history');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
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

function setOperator(operator) {
    if (currentOperator === '') {
        currentOperator = operator;
        isSecondNumber = true;
        history.textContent = firstNumber + ' ' + operator;
        display.value = '0';
    }
}

function clearHistoryAndSetResult(result) {
    display.value = result;
    firstNumber = display.value;
    secondNumber = '';
    currentOperator = '';
    history.textContent = result;
}


function percentage() {
    if (currentOperator === '' && firstNumber) {
        let result = parseFloat(firstNumber) / 100;
        clearHistoryAndSetResult(result);
    } else if (currentOperator !== '' && secondNumber) {
        let result = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;
        clearHistoryAndSetResult(result);
    }
}


function reciprocal() {
    if (display.value !== '0') {
        let result = 1 / parseFloat(display.value);
        clearHistoryAndSetResult(result);
    }
}


function square() {
    let result = Math.pow(parseFloat(display.value), 2);
    clearHistoryAndSetResult(result);
}


function squareRoot() {
    let result = Math.sqrt(parseFloat(display.value));
    clearHistoryAndSetResult(result);
}


function toggleSign() {
    let result = parseFloat(display.value) * -1;
    clearHistoryAndSetResult(result);
}


function clearHistoryAndSetResult(result) {
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = '';
    history.textContent = result;
}

function calculate() {
    if (currentOperator && secondNumber) {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                result = display.value;
        }

        display.value = result;
        history.textContent = firstNumber + ' ' + currentOperator + ' ' + secondNumber + ' =';
        firstNumber = result.toString();
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