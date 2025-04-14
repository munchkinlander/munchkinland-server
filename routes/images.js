import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const imagesData = JSON.parse(fs.readFileSync("data/images.json"));
    res.json(imagesData);
  } catch (error) {
    console.error("Error reading images.json.", error);
    res.status(500).send({ error: "Failed to read images.json." });
  }
});

export default router;