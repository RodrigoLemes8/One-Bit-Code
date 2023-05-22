let screen = document.querySelector(".screen");
let operators = ["+", "-", "*", "/"];

function addToScreen(value) {
  screen.textContent += value;
}

function clearScreen() {
  screen.textContent = "";
}

function calculate() {
  let expression = screen.textContent;
  let operator = null;
  let numbers = [];

  for (let i = 0; i < operators.length; i++) {
    if (expression.includes(operators[i])) {
      operator = operators[i];
      numbers = expression.split(operator);
      break;
    }
  }

  let result = null;

  switch (operator) {
    case "+":
      result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
      break;
    case "-":
      result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
      break;
    case "*":
      result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
      break;
    case "/":
      result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
      break;
    default:
      break;
  }

  if (result !== null) {
    screen.textContent = result.toString();
  }
}
