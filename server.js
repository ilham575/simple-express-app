const express = require("express");

const app = express();
app.disable('x-powered-by');
const port = 4000;

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Simple function
function sum(a, b) {
  return a + b;
}

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const result = sum(Number(a), Number(b));
  res.send(`Sum: ${result}`);
});

// Route handling
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handling
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

