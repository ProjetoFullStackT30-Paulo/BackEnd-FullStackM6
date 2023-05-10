import { Router } from "express";
import {
  AnnouncementCreateSchema,
  AnnouncementUpdateSchema,
  CommentCreateSchema,
} from "../schemas";
import {
  countAnnouncementController,
  createAnnouncementController,
  createCommentController,
  deleteAnnouncementController,
  deleteCommentController,
  listAnnouncementController,
  retrieveAnnouncementController,
  updateAnnouncementController,
  updateCommentController,
} from "../controllers";
import {
  validateSchemaMiddleware,
  verifyAnnouncementOwner,
  verifyIsSeller,
  verifyUserIsAuthenticated,
} from "../middlewares";
import { verifyCommentOwner } from "../middlewares/isCommentOwner.middleware";

export const announcementRouter = Router();

announcementRouter.post(
  "",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  validateSchemaMiddleware(AnnouncementCreateSchema),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementController);
announcementRouter.get("/count", countAnnouncementController);
announcementRouter.get("/:id", retrieveAnnouncementController);

announcementRouter.patch(
  "/:id",
  verifyUserIsAuthenticated,
  verifyAnnouncementOwner,
  validateSchemaMiddleware(AnnouncementUpdateSchema),
  updateAnnouncementController
);
announcementRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  verifyAnnouncementOwner,
  deleteAnnouncementController
);

export const commentRouter = Router();

commentRouter.post(
  "/:id",
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CommentCreateSchema),
  createCommentController
);

commentRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  deleteCommentController
);

commentRouter.patch(
  "/:id",
  verifyUserIsAuthenticated,
  verifyCommentOwner,
  validateSchemaMiddleware(CommentCreateSchema),
  updateCommentController
);
