
var express = require("express");
var router = express.Router();
var Destinations = require("../models/destinations");

router.get("/:category", async function (req, res, next) {
  try {
    const category = req.params.category;
    const places = await Destinations.find({ category: category });
    res.render("category", { title: `${category.charAt(0).toUpperCase() + category.slice(1)} Places`, places: places });
  } catch (err) {
    console.log(err);
    next(err); // Pass the error to the next middleware
  }
});
module.exports = router;