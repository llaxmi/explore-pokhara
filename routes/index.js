var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Pokhara" });
});

/* GET category page*/
router.get("/category/:category", function (req, res, next) {
  res.render("category", { title: "Pokhara", category: category });
});

module.exports = router;
