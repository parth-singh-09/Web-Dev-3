// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

const logger = require("./modules/logger");

// process.argv[0] -> node executable path
// process.argv[1] -> path to this script
// process.argv[2] -> operation
// process.argv[3], process.argv[4] -> operands
const args = process.argv.slice(2);
const [operation, rawA, rawB] = args;

function printUsage() {
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
}

if (!operation || rawA === undefined || rawB === undefined) {
  logger.warn("Missing arguments.");
  printUsage();
  process.exit(1);
}

const a = Number(rawA);
const b = Number(rawB);

if (Number.isNaN(a) || Number.isNaN(b)) {
  logger.error("Both operands must be valid numbers.");
  printUsage();
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = a + b;
    break;
  case "sub":
  case "subtract":
    result = a - b;
    break;
  case "mul":
  case "multiply":
    result = a * b;
    break;
  case "div":
  case "divide":
    if (b === 0) {
      logger.error("Division by zero is not allowed.");
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    logger.error(`Invalid operation: "${operation}"`);
    printUsage();
    process.exit(1);
}

logger.success(`Operation: ${operation}`);
console.log(`Result: ${result}`);
