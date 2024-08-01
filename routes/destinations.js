var express = require("express");
var router = express.Router();
var Destinations = require("../models/destinations");

/* GET home page. */
router.get("/add", function (req, res, next) {
  res.render("addDestinations", { title: "Add Destination" });
  //passing value to addDestinations.ejs
});

router.post("/save", function (req, res, next) {
  const destination = new Destinations(req.body);
  destination.save();
  console.log(destination.category);
  res.redirect(`/category/${destination.category}`);
});

module.exports = router;
