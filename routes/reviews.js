const express = require("express");
const router = express.Router();
const Review = require("../models/review");

/* GET reviews page. */
router.get("/", async function (req, res, next) {
  const reviews = await Review.find();
  res.render("review", { title: "Reviews", reviews: reviews });
});

router.post("/save", async (req, res, next) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.redirect("/reviews");
  } catch (error) {
    console.log("ERROR IS ", error);
  }
});

/* GET reviews by title. */
router.get("/place/:title", async function (req, res, next) {
  try {
    const title = req.params.title;
    const reviews = await Review.find({ title: title });
    res.render("review-detail", {
      title: `Reviews for ${title}`,
      reviews: reviews,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
