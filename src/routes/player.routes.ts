import express from 'express';
const router = express.Router();
import { getPlayers, getPlayer, getPlayerStatistics, updatePlayerStatistics } from "../controllers/player.controller";

router.get("/", getPlayers);

router.get("/:player_id", getPlayer);

router.get("/:player_id/stats", getPlayerStatistics);

router.put("/:player_id/stats", updatePlayerStatistics);

module.exports = router;