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

function average(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = nums[0];
  }
  if (nums.length === 0) return 0;
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

module.exports = { add, multiply, average };