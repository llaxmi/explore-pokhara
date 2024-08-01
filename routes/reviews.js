const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const Destinations = require("../models/destinations");

/* GET reviews page. */
router.get("/", async function (req, res, next) {
  const reviews = await Review.find();
  res.render("review", {
    title: "Reviews",
    reviews: reviews,
  });
});

router.post("/save", async (req, res, next) => {
  try {
    const review = new Review(req.body);
    console.log(req.body);
    await review.save();
    const reviews = await Review.find({ location: req.body.location });
    res.render("review", {
      title: "Reviews",
      reviews: reviews,
      category: req.body.location,
    });
  } catch (error) {
    console.log("ERROR IS ", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const destination = await Destinations.findById(req.params.id);
  const reviews = await Review.find({ location: destination.title });
  res.render("review", {
    title: "Reviews",
    reviews: reviews,
    category: destination.title,
  });
});

module.exports = router;
