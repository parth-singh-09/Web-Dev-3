// modules/isEven.js
// Simple utility module that checks whether a number is even.

function isEven(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("isEven() expects a valid number");
  }
  return num % 2 === 0;
}

module.exports = isEven;
