function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}

module.exports = { add, multiply, average };
TARGET_FILE: src/strings.js
function capitalize(str) {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = { capitalize };