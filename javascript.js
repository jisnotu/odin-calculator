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
      default:
        alert('ERROR: An unrecognized button was pressed.');
    }
  }
});

function handleDigitButton(button) {
  let value = button.textContent;

  if (display.textContent === '0') {
    if (value === '0') {
      return;
    }
    else {
      display.textContent = value;
    }
  }

  else {
    if (display.textContent.length >= 12) {
      return;
    }
    else {
      display.textContent += value;
    }
  }
  
  a = +display.textContent;
}