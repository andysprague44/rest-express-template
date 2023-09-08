import { Request, Response } from "express";
import { get, getSingleById, getForUser, create, remove, update, submit, submitForUser } from '../services/application.service'

export async function getApplications(req: Request, res: Response): Promise<Response> {
  return res.json(await get());
}

export async function getApplicationsForUser(req: Request, res: Response): Promise<Response> {
  return res.json(await getForUser(req.params.user_id));
}

export async function getApplicationById(req: Request, res: Response): Promise<Response> {
  return res.json(await getSingleById(req.params.id));
}

export async function createApplication(req: Request, res: Response): Promise<Response> {
  return res.json(await create(req.body));
}

export async function updateApplication(req: Request, res: Response): Promise<Response> {
  return res.json(await update(req.body));
}

export async function /*soft*/deleteApplication(req: Request, res: Response): Promise<Response> {
  return res.json(await remove(req.params.id));
}

export async function submitApplication(req: Request, res: Response): Promise<Response> {

  if (req.params.id == null && req.params.user_id != null)
  {
    return res.json(await submitForUser(req.params.user_id));
  }
  return res.json(await submit(req.params.id));
}
