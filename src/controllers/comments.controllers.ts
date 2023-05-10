import { Request, Response } from "express";
import { createCommentService } from "../services";
import { deleteCommentService } from "../services/comments/deleteComment.service";
import { updateCommentService } from "../services/comments/updateComments.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createCommentService(
    req.body,
    req.params.id,
    req.user.id
  );
  return res.status(201).json(comment);
};

export const deleteCommentController = async (req: Request, res: Response) => {
  await deleteCommentService(req.params.id);
  return res.status(204).json({});
};

export const updateCommentController = async (req: Request, res: Response) => {
  const comment = await updateCommentService(req.params.id, req.body);
  return res.status(201).json(comment);
};
