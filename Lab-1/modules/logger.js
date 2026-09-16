// modules/logger.js
// Simple reusable logger module with timestamped, color-coded output.

const COLORS = {
  reset: "\x1b[0m",
  info: "\x1b[36m",    // cyan
  success: "\x1b[32m", // green
  error: "\x1b[31m",   // red
  warn: "\x1b[33m",    // yellow
};

function timestamp() {
  return new Date().toISOString();
}

function log(message) {
  console.log(`${COLORS.info}[LOG]${COLORS.reset} [${timestamp()}] ${message}`);
}

function success(message) {
  console.log(`${COLORS.success}[SUCCESS]${COLORS.reset} [${timestamp()}] ${message}`);
}

function error(message) {
  console.log(`${COLORS.error}[ERROR]${COLORS.reset} [${timestamp()}] ${message}`);
}

function warn(message) {
  console.log(`${COLORS.warn}[WARN]${COLORS.reset} [${timestamp()}] ${message}`);
}

module.exports = { log, success, error, warn };
