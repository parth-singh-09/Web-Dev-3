// app.js
// Demonstrates creating and reusing custom modules (isEven + logger)

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.log("Starting module reusability demo...");

const numbersToCheck = [2, 7, 10, 15, 42, 101];

numbersToCheck.forEach((num) => {
  const result = isEven(num);
  if (result) {
    logger.success(`${num} is EVEN`);
  } else {
    logger.warn(`${num} is ODD`);
  }
});

logger.log("Module reusability demo complete.");
