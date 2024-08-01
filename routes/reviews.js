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




module.exports = router;
