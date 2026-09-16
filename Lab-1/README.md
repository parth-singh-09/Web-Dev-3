# Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)
**Unit:** Unit-1 — Lab Assignment 1
**Marks:** 2.5

A collection of mini command-line and server utilities built using only Node.js
core modules (`process`, `http`, `fs`, `crypto`). No external npm packages or
frameworks are used.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js               # Demonstrates custom module reuse
├── server.js             # HTTP server with routing (http module)
├── fileManager.js        # CRUD file operations (fs module)
├── dice.js               # Random dice roller (crypto module)
├── modules/
│   ├── isEven.js          # Custom module: checks even/odd
│   └── logger.js          # Custom module: timestamped logger
└── README.md
```

## 1. CLI Calculator

```
node calculator.js <add|sub|mul|div> <num1> <num2>
```

Example:
```
node calculator.js add 10 5
# Result: 15
```

Invalid operations and non-numeric input are handled gracefully with an error
message and usage hint.

## 2. Custom Module Reuse

`modules/isEven.js` exports a single function via `module.exports`.
`modules/logger.js` exports an object of logging helpers (`log`, `success`,
`error`, `warn`).

Run the demo:
```
node app.js
```

This imports both custom modules with `require()` and uses them together to
classify a list of numbers as even or odd, with logger output for each result.

## 3. HTTP Server

```
node server.js
```

Server runs on port **3000**. Routes:

| Route          | Response             |
|----------------|-----------------------|
| `/`            | Welcome message       |
| `/about`       | About page             |
| `/contact`     | Contact page            |
| any other route | 404 Error Message        |

Test with a browser, `curl`, or Postman, e.g.:
```
curl http://localhost:3000/about
```

## 4. File Manager (fs module)

```
node fileManager.js
```

Performs a full CRUD cycle on `test.txt`:
1. **Create** — `fs.writeFile()`
2. **Read** — `fs.readFile()`
3. **Update** — `fs.appendFile()`, then reads the updated content
4. **Delete** — `fs.unlink()`

Missing-file errors on delete are caught and reported gracefully
(`ENOENT` handling) instead of crashing the process.

## 5. Dice Generator (crypto module)

```
node dice.js [numberOfRolls]
```

Uses `crypto.randomInt(1, 7)` for cryptographically strong randomness (an
upgrade over `Math.random()`). Defaults to a single roll if no argument is
given.

Example:
```
node dice.js 3
# Roll 1: Dice Rolled: 4
# Roll 2: Dice Rolled: 6
# Roll 3: Dice Rolled: 1
```

**Bonus:** every roll is appended with a timestamp to `dice-history.txt` so
past rolls can be reviewed later.

## Bonus Features Implemented

- ✅ Colored terminal output via ANSI escape codes (see `modules/logger.js`)
- ✅ Timestamped logs in the logger module
- ✅ Dice roll history persisted to `dice-history.txt`
- Calculator can be easily extended — `mul`/`multiply` and `div`/`divide`
  are already supported alongside `add`/`sub`

## Notes on Execution Flow

Each script logs before/after key operations so you can observe:
- **Synchronous** execution in `calculator.js` and `app.js`
- **Asynchronous, callback-based** execution in `fileManager.js` (the CRUD
  steps are chained inside callbacks to guarantee correct ordering) and in
  `server.js`'s request handling
