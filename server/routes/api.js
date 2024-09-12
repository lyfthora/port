import express from "express";
import { translate } from "../controllers/translateController.js";

const router = express.Router();

router.post("/translate", translate);

// Add this for debugging
router.get("/translate", (req, res) => {
  res.send(
    "Translation API is working. Please use POST method for translations."
  );
});

export default router;
