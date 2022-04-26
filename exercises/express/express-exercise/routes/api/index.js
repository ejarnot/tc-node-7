const express = require("express");

const router = express.Router();

router.get("/test", (req, res, next) => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
