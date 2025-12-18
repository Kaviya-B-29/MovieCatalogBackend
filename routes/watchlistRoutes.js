const express = require("express");
const Watchlist = require("../models/Watchlist");

const router = express.Router();

// ADD TO WATCHLIST
router.post("/", async (req, res) => {
  try {
    const exists = await Watchlist.findOne({ imdbID: req.body.imdbID });
    if (exists) {
      return res.status(400).json({ message: "Already in watchlist" });
    }

    const movie = await Watchlist.create(req.body);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error adding to watchlist" });
  }
});

// GET WATCHLIST
router.get("/", async (req, res) => {
  const movies = await Watchlist.find().sort({ createdAt: -1 });
  res.json(movies);
});

// REMOVE FROM WATCHLIST
router.delete("/:id", async (req, res) => {
  await Watchlist.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

module.exports = router;
