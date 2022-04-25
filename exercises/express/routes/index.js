const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../public/index.html"));
  } catch (err) {
    next(err);
  }
});

router.get("/about", (req, res, next) => {
  try {
    res.json({ success: true, query: req.query });
  } catch (err) {
    next(err);
  }
});

router.post("/signup/:secret", (req, res, next) => {
  try {
    res.json({
      msg: `${req.body.name}, thanks for signing up!`,
      secret: req.params.secret,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
