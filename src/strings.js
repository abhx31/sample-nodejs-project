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