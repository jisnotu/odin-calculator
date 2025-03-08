function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(op, a, b) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      alert('ERROR: Received an operator that is not one of add, subtract, multiply, or divide.');
  }
}

let a = 0;
let b;
let operator;

let display = document.querySelector('.display div');
display.textContent = a;
const buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', event => {
  let target = event.target;

  if (target.tagName === 'BUTTON') {
    let className = target.className;

    switch (className) {
      case 'digit-button':
        handleDigitButton(target);
        break;
      case 'operator-button':
        handleOperatorButton(target);
        break;
      default:
        alert('ERROR: An unrecognized button was pressed.');
    }
  }
});

function handleDigitButton(button) {
  let value = +button.textContent;

  if (operator === undefined) {
    if (a === undefined) {
      a = value;
      display.textContent = value;
    }
    else { // a is defined
      if (a === 0) {
        if (value === 0) return;
        else {
          display.textContent = value;
          a = value;
        }
      }
      else { // a is not 0
        if (display.textContent.length >= 12) return;
        else {
          display.textContent += value;
          a = +display.textContent;
        }
      }
    }
  }
  else { // operator is defined
    if (b === undefined) {
      b = value;
      display.textContent = value;
    }
    else { // b is defined
      if (b === 0) {
        if (value === 0) return;
        else {
          display.textContent = value;
          b = value;
        }
      }
      else { // b is not 0
        if (display.textContent.length >= 12) return;
        else {
          display.textContent += value;
          b = +display.textContent;
        }
      }
    }
  }
}

function handleOperatorButton(button) {
  let operation = button.textContent;

  switch (operation) {
    case '+':
    case '-':
    case '*':
    case '/':
      handleBasicOperation(operation);
      break;
    case '=':
      handleEqualButton();
      break;
    case 'C':
      clearCalculator();
      break;
    default:
      alert('ERROR: Unrecognized operation!');
  }
}

function handleBasicOperation(operation) {
  if (a === undefined) {
    a = +display.textContent;
    operator = operation;
  }
  else if (a !== undefined && b === undefined) {
    operator = operation;
  }
  else if (a !== undefined && b !== undefined) {
    switch (operator) {
      case '+':
        a = add(a, b);
        break;
      case '-':
        a = subtract(a, b);
        break;
      case '*':
        a = multiply(a, b);
        break;
      case '/':
        a = divide(a, b);
        break;
      default:
        alert('ERROR: Stored operator is not a recognized operator!');
    }
    display.textContent = a;
    b = undefined;
    operator = operation;
  }
  else {
    alert('ERROR: Something went wrong while trying to handle a basic operation.');
  }
}