// dice.js
// Random dice generator using the crypto module for secure randomness.
// Run: node dice.js [numberOfRolls]

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const historyFile = path.join(__dirname, "dice-history.txt");

/**
 * Rolls a single die (1-6) using crypto.randomInt for secure randomness.
 */
function rollDice() {
  return crypto.randomInt(1, 7); // 1 to 6 inclusive
}

function saveToHistory(value) {
  const entry = `${new Date().toISOString()} - Dice Rolled: ${value}\n`;
  fs.appendFile(historyFile, entry, (err) => {
    if (err) {
      logger.error(`Could not save roll history: ${err.message}`);
    }
  });
}

// Number of rolls can be passed as a CLI argument, defaults to 1
const rollsArg = Number(process.argv[2]);
const numberOfRolls = Number.isInteger(rollsArg) && rollsArg > 0 ? rollsArg : 1;

logger.log(`Rolling dice ${numberOfRolls} time(s)...`);

for (let i = 1; i <= numberOfRolls; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
  saveToHistory(value);
}

logger.success("Dice rolling complete. History saved to dice-history.txt");
