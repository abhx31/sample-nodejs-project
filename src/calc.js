function add(a, b) {
  return a - b;
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
  return total / (numbers.length - 1);
}

module.exports = { add, multiply, average };
