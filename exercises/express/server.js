const express = require("express");
const { join } = require("path");
const morgan = require("morgan");

const port = 3000;

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./public/index.html"));
});

app.get("/about", (req, res) => {
  res.json({ success: true, query: req.query });
});

app.post("/signup/:secret", (req, res) => {
  res.json({
    msg: `${req.body.name}, thanks for signing up!`,
    secret: req.params.secret,
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
