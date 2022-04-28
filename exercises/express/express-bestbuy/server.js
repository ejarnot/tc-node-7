const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const port = 8080;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

// 404 Handler
app.use((req, res, next) => {
  try {
    res
      .status(404)
      .send(
        "Route does not exist. Check the url endpoint and method you are using with your request."
      );
  } catch (e) {
    next(e);
  }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .send(err.message || "An error occurred on the server. Try again later.");
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
