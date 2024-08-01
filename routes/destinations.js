var express = require("express");
var router = express.Router();
var Destinations = require("../models/destinations");
const { upload } = require("../middlewares/uploads");

/* GET home page. */
router.get("/add", function (_, res) {
  res.render("addDestinations", { title: "Add Destination" });
  //passing value to addDestinations.ej=
});

router.post("/save", upload.single("image"), function (req, res) {
  try {
    console.log(req.file);
    const destination = new Destinations({
      ...req.body,
      image: req.file.filename,
    });
    destination.save();
    res.redirect(`/category/${destination.category}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
