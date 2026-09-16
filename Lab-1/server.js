// server.js
// Basic HTTP server using the built-in http module with multiple routes.

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Route Not Found");
      break;
  }
});

server.listen(PORT, () => {
  logger.success(`Server running at http://localhost:${PORT}/`);
  console.log(`Try visiting:
  http://localhost:${PORT}/
  http://localhost:${PORT}/about
  http://localhost:${PORT}/contact
  http://localhost:${PORT}/unknown-route (404 test)`);
});
