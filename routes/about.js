import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const aboutData = JSON.parse(fs.readFileSync("data/about.json"));
    res.json(aboutData);
  } catch (error) {
    console.error("Error reading about.json.", error);
    res.status(500).send({ error: "Failed to read about.json." });
  }
});

export default router;