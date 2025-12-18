const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
  {
    imdbID: String,
    title: String,
    poster: String,
    year: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Watchlist", watchlistSchema);
