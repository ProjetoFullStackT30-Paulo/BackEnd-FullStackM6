import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementController,
  retrieveAnnouncementController,
  updateAnnouncementController,
} from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { AnnouncementCreate, AnnouncementUpdateRequest } from "../schemas";

export const announcementRouter = Router();

announcementRouter.post(
  "/:id",
  validateSchemaMiddleware(AnnouncementCreate),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementController);
announcementRouter.get("/:id", retrieveAnnouncementController);
announcementRouter.patch(
  "/:id",
  validateSchemaMiddleware(AnnouncementUpdateRequest),
  updateAnnouncementController
);
announcementRouter.delete("/:id", deleteAnnouncementController);
