import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const carouselData = JSON.parse(fs.readFileSync("data/carousel.json"));
    res.json(carouselData);
  } catch (error) {
    console.error("Error reading carousel.json.", error);
    res.status(500).send({ error: "Failed to read carousel.json." });
  }
});

export default router;