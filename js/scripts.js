function add(num1, num2) {
  return num1 + num2 ;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide (num1 , num2) {
  return num1 / num2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));