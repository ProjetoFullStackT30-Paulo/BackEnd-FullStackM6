import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { verifyIsAdmin } from "./isAdmin.middleware";

export const verifyCommentOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const comment = await prisma.listComment.findFirst({
    where: { id },
  });

  if (comment?.user_id === req.user.id) {
    return next();
  }

  return verifyIsAdmin(req, res, next);
};
