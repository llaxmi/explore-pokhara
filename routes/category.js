var express = require("express");
var router = express.Router();
var Destinations = require("../models/destinations");

router.get("/:category", async function (req, res, next) {
  try {
    const category = req.params.category;
    const places = await Destinations.find({ category: category }).sort({
      createdAt: -1,
    });
    res.render("category", {
      title: `${
        category.charAt(0).toLocaleUpperCase() + category.slice(1)
      } Places`,
      places: places,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
