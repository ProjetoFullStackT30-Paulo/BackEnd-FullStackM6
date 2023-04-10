import { Response } from "express";
import { Request } from "express";
import { createUserService } from "../services/users";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};
