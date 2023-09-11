import express from 'express';
import { getPlayers, getPlayer, getPlayerStatistics, updatePlayerStatistics } from "../controllers/player.controller";

const router = express.Router();

router.get("/", getPlayers);

router.get("/:player_id", getPlayer);

router.get("/:player_id/stats", getPlayerStatistics);

router.put("/:player_id/stats", updatePlayerStatistics);

module.exports = router;


