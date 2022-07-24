let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, a, b) {
  if (operator === "add") {
    return add(a, b);
  }
  if (operator === "subtract") {
    return subtract(a, b);
  }
  if (operator === "multiply") {
    return multiply(a, b);
  }
  if (operator === "divide") {
    return divide(a, b);
  }
}

let displayBigValue = 0;
const displayBig = document.getElementById("displayBig");
displayBig.textContent = displayBigValue;

let displaySmallValue = 0;
const displaySmall = document.getElementById("displaySmall");
displaySmall.textContent = displaySmallValue;

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btnRoot = document.getElementById("root");
const btnCe = document.getElementById("ce");
const btnC = document.getElementById("c");
const btnMinus = document.getElementById("minus");
const btnDivide = document.getElementById("divide");
const btnMultiply = document.getElementById("multiply");
const btnDot = document.getElementById("dot");
const btnEqual = document.getElementById("equal");
const btnPlus = document.getElementById("plus");
const btnPercent = document.getElementById("percent");

let inputNumber;

btn1.addEventListener("click", () => {
  inputNumber = 1;
  populateBigDisplay();
});

btn2.addEventListener("click", () => {
  inputNumber = 2;
  populateBigDisplay();
});
btn3.addEventListener("click", () => {
  inputNumber = 3;
  populateBigDisplay();
});
btn4.addEventListener("click", () => {
  inputNumber = 4;
  populateBigDisplay();
});
btn5.addEventListener("click", () => {
  inputNumber = 5;
  populateBigDisplay();
});
btn6.addEventListener("click", () => {
  inputNumber = 6;
  populateBigDisplay();
});
btn7.addEventListener("click", () => {
  inputNumber = 7;
  populateBigDisplay();
});
btn8.addEventListener("click", () => {
  inputNumber = 8;
  populateBigDisplay();
});
btn9.addEventListener("click", () => {
  inputNumber = 9;
  populateBigDisplay();
});

btn0.addEventListener("click", () => {
  inputNumber = 0;
  populateBigDisplay();
});

function populateBigDisplay() {
  displayBig.textContent += inputNumber;
}

let inputValue;
function storeInputValue() {
  inputValue = displayBig.textContent;
  clearBigDisplay();
  return Number(inputValue);
}

function clearBigDisplay() {
  displayBig.textContent = 0;
}
