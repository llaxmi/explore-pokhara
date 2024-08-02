const express = require("express");
const router = express.Router();
const Destination = require("../models/destinations");

// Search route
router.get("/", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
    const results = await Destination.find({ $text: { $search: query } });
    res.render("category", { title: "Search results", places: results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
