const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("hello pizzas");
});

module.exports = router;
