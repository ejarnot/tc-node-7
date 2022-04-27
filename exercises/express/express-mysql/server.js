const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");

const port = 3001;

const app = express();

// Parses incoming request body to JSON
app.use(express.json());

// Logs request data to the dev console
app.use(morgan("dev"));

app.use("/api/v1", apiRouter);

// Generic 404 Handler
app.use((req, res, next) => {
  try {
    res.status(404).send("404 Page Not Found");
  } catch (e) {
    next(e);
  }
});

// Generic Error Handler
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(err.message || "An unknown error occurred on the server.");
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
