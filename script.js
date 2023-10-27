// Addition

function arithmeticAdd(num1, num2) {
  return num1 + num2;
}

// Subtraction

function arithmeticSubtract(num1, num2) {
  return num1 - num2;
}

// Multiplication

function arithmeticMultiply(num1, num2) {
  return num1 * num2;
}

// Division

function arithmeticDivide(num1, num2) {
  return num1 / num2;
}

window.onload = function () {
  const numField1 = document.getElementById("number-field-1");
  const numField2 = document.getElementById("number-field-2");

  // Addition

  const addOp = document.getElementById("addition-operator");
  addOp.addEventListener("click", function () {
    const value1 = parseFloat(numField1.value);
    const value2 = parseFloat(numField2.value);
    const result = arithmeticAdd(value1, value2);
    document.getElementById("result").innerHTML = result;
  });

  // Subtraction

  const subOp = document.getElementById("subtraction-operator");
  subOp.addEventListener("click", function () {
    const value1 = parseFloat(numField1.value);
    const value2 = parseFloat(numField2.value);
    const result = arithmeticSubtract(value1, value2);
    document.getElementById("result").innerHTML = result;
  });

  // Multiplication

  const mulOp = document.getElementById("multiplication-operator");
  mulOp.addEventListener("click", function () {
    const value1 = parseFloat(numField1.value);
    const value2 = parseFloat(numField2.value);
    const result = arithmeticMultiply(value1, value2);
    document.getElementById("result").innerHTML = result;
  });

  // Division

  const divOp = document.getElementById("division-operator");
  divOp.addEventListener("click", function () {
    const value1 = parseFloat(numField1.value);
    const value2 = parseFloat(numField2.value);
    const result = arithmeticDivide(value1, value2);
    document.getElementById("result").innerHTML = result;
  });

  // Reset Button

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function () {
    numField1.value = "";
    numField2.value = "";
    document.getElementById("result").innerHTML = "";
  });
};
