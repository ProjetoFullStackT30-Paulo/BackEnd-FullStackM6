import { AppError } from "../../errors";
import { ICommentRequest } from "../../interfaces";
import prisma from "../../prisma";

export const updateCommentService = async (
  id: string,
  { comment }: ICommentRequest
) => {
  try {
    const commentData = await prisma.listComment.update({
      where: { id },
      data: {
        comment: comment,
      },
    });

    return commentData;
  } catch (error) {
    throw new AppError("comment not found", 404);
  }
};
