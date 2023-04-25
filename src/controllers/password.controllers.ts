import { Request, Response } from "express";
import { createRecoveryService, updatePasswordService } from "../services";

export const createRecoveryController = async (req: Request, res: Response) => {
  const token = await createRecoveryService(req.body);

  return res.status(201).json(token);
};

export const updatePasswordController = async (req: Request, res: Response) => {
  const user = await updatePasswordService(req.body, req.user.id);

  return res.status(200).json(user);
};
