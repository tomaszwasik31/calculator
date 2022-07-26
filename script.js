const displayBig = document.getElementById("displayBig");
const displaySmall = document.getElementById("displaySmall");
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
let lastOperation;
let storedValue;

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

// operations

btnPlus.addEventListener("click", () => {
  lastOperation = "+";
  doBasicOperation();
});

btnMinus.addEventListener("click", () => {
  lastOperation = "-";
  doBasicOperation();
});

btnMultiply.addEventListener("click", () => {
  lastOperation = "x";
  doBasicOperation();
});

btnDivide.addEventListener("click", () => {
  lastOperation = "÷";
  doBasicOperation();
});
btnPercent.addEventListener("click", () => {
  lastOperation = "%";
  storedValue = Number(displayBig.textContent);
  calculate();
});

btnRoot.addEventListener("click", () => {
  lastOperation = "√";
  storedValue = Number(displayBig.textContent);
  calculate();
});

btnEqual.addEventListener("click", () => {
  calculate();
});

btnC.addEventListener("click", () => {
  clearBigDisplay();
  clearSmallDisplay();
  lastOperation = "";
  storedValue = 0;
});

btnCe.addEventListener("click", () => {
  displayBig.textContent = displayBig.textContent.slice(0, -1);
});

// functions
let add = (a, b) => round(a + b);
let subtract = (a, b) => round(a - b);
let multiply = (a, b) => round(a * b);
let divide = (a, b) => round(a / b);
let percent = (a) => round(a * 0.01);
let root = (a) => round(Math.sqrt(a));

let round = (a) => Math.round(a * 1000000) / 1000000;

function populateBigDisplay() {
  displayBig.textContent += inputNumber;
}

function clearBigDisplay() {
  displayBig.textContent = "";
}

function clearSmallDisplay() {
  displaySmall.textContent = "";
}

function errorMsg() {
  displaySmall.textContent = "PRESS C TO RESET";
  displayBig.textContent = "ERROR";
  return;
}
function doBasicOperation() {
  storedValue = Number(displayBig.textContent);
  calculate();
  clearBigDisplay();
}

function calculate() {
  a = storedValue;
  b = Number(displayBig.textContent);

  if (lastOperation === "+") {
    displayBig.textContent = add(a, b);
    displaySmall.textContent = `${a}${lastOperation}`;
  }

  if (lastOperation === "-") {
    displayBig.textContent = subtract(a, b);
    displaySmall.textContent = `${a}${lastOperation}`;
  }

  if (lastOperation === "x") {
    displayBig.textContent = multiply(a, b);
    displaySmall.textContent = `${a}${lastOperation}`;
  }

  if (lastOperation === "÷") {
    if (b == 0) {
      return errorMsg();
    }
    displayBig.textContent = divide(a, b);
    displaySmall.textContent = `${a}${lastOperation}`;
  }

  if (lastOperation === "%") {
    displayBig.textContent = percent(a);
    displaySmall.textContent = `${a}`;
  }

  if (lastOperation === "√") {
    displayBig.textContent = root(a);
    displaySmall.textContent = `${a}`;
  }
}
