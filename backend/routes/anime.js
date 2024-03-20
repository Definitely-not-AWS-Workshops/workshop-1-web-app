import express from "express";
import { getAnimeController, createAnimeController } from "../controllers/anime.js";

const router = express.Router();

router.get("/", getAnimeController);
router.post("/", createAnimeController);

export default router;
