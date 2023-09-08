import { Request, Response } from "express";
import { get, getSingleById, create } from '../services/player.service'
import { get as getStats, update } from '../services/player_statistics.service'

export async function getPlayers(req: Request, res: Response): Promise<Response> {
  return res.json(await get());
}

export async function getPlayer(req: Request, res: Response): Promise<Response> {
  return res.json(await getSingleById(req.params.player_id));
}

export async function getPlayerStatistics(req: Request, res: Response): Promise<Response> {
  return res.json(await getStats(req.params.player_id));
}

export async function updatePlayerStatistics(req: Request, res: Response): Promise<Response> {
  return res.json(await update(req.body));
}

