import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementController,
  retrieveAnnouncementController,
  updateAnnouncementController,
} from "../controllers";

export const announcementRouter = Router();

announcementRouter.post("/:id", createAnnouncementController);
announcementRouter.get("", listAnnouncementController);
announcementRouter.get("/:id", retrieveAnnouncementController);
announcementRouter.patch("/:id", updateAnnouncementController);
announcementRouter.delete("/:id", deleteAnnouncementController);
