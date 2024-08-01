var express = require("express");
var router = express.Router();
var Destinations = require('../models/destinations')

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Pokhara" });
});

/* GET category page*/
router.get("/category/:category", function (req, res, next) {
  const category = req.params.category;
  res.render("category", { title: "Pokhara", category:category });
});
module.exports = router;
