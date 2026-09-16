// fileManager.js
// File manager demonstrating CRUD operations using the fs module.
// Run: node fileManager.js

const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

function createFile() {
  logger.log("Creating File...");
  fs.writeFile(filePath, "Hello Node.js", (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.success("File Created");
    readFile();
  });
}

function readFile() {
  logger.log("Reading File...");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data);
    updateFile();
  });
}

function updateFile() {
  logger.log("Updating File...");
  fs.appendFile(filePath, "\nLearning FS Module", (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.success("File Updated");

    // Read again to show the updated content
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        logger.error(`Failed to read updated file: ${err.message}`);
        return;
      }
      console.log(data);
      deleteFile();
    });
  });
}

function deleteFile() {
  logger.log("Deleting File...");
  fs.unlink(filePath, (err) => {
    if (err) {
      // Handle missing file errors gracefully
      if (err.code === "ENOENT") {
        logger.warn("File does not exist, nothing to delete.");
      } else {
        logger.error(`Failed to delete file: ${err.message}`);
      }
      return;
    }
    logger.success("File Deleted");
  });
}

// Kick off the CRUD sequence
createFile();
