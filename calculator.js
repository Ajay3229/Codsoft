let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateScreen();
}

function updateScreen() {
  const screen = document.querySelector('.calculator-screen');
  screen.value = currentOperand;
}

function chooseOperator(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') compute();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  operation = null;
  previousOperand = '';
  updateScreen();
}

function clearScreen() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateScreen();
}
