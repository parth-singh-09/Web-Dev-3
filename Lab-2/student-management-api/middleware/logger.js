// Custom logger middleware
// Logs: HTTP Method, URL, and Timestamp for every incoming request.

function logger(req, res, next) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${req.method}] ${req.originalUrl} - ${timestamp}`);
  next(); // pass control to the next middleware/route handler
}

module.exports = logger;
