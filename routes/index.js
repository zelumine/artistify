const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("index");
});

/* GET dashboard page  */
router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});


module.exports = router;
