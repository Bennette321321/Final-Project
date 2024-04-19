import express from "express";

import * as leaderboardController from "../controllers/leaderboardController.js";

const router = express.Router();

router.get("/", leaderboardController.getPlayers);
router.post("/", leaderboardController.createPlayer);
router.delete("/:name", leaderboardController.deletePlayer);
router.post("/:name", leaderboardController.updatePlayer);

export default router;