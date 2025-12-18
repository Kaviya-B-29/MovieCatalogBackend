const express = require("express");
const axios = require("axios");

const router = express.Router();

/**
 * SEARCH MOVIES
 * Used by HomePage.jsx
 * GET /api/movies/search?search=&type=&page=
 */
router.get("/search", async (req, res) => {
  const { search, type, page } = req.query;

  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: search,
        type,
        page,
      },
    });

    // Send OMDB response AS-IS (frontend depends on this shape)
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      Response: "False",
      Error: "Server error",
    });
  }
});

/**
 * MOVIE DETAILS
 * Used by MovieDetails.jsx
 * GET /api/movies/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        i: req.params.id,
        plot: "full",
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      Response: "False",
      Error: "Server error",
    });
  }
});

module.exports = router;
