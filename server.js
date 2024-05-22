"use strict";

const express = require("express");
const ogs = require("open-graph-scraper");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Define route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// open graph scraper url
app.get("/url", (req, res) => {
  const ogUrl = req.query.ogUrl || "https://github.com/";

  ogs({ url: ogUrl, timeout: 8000 })
    .then((results) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(results, null, 3));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    });
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
