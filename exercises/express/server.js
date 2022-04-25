const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const router = require("./routes");

const port = 3000;

const app = express();

app.use(express.json());

app.use(morgan("dev"));

// Checks route middleware from /routes/index.js
app.use(router);

// Handle 404s
app.use((req, res, next) => {
  try {
    res.status(404).sendFile(join(__dirname, "./public/notFound.html"));
  } catch (err) {
    next(err);
  }
});

// Handle Errors
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(500)
    .json({ msg: "An error occurred on the server. Try again later", err });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
