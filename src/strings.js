function capitalize(word) {
  if (!word) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverse(text) {
  return text.split("").reverse().join("");
}

module.exports = { capitalize, reverse };
TARGET_FILE: src/calc.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

module.exports = { add, multiply, average };