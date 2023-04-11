import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAnnouncementWithUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUserController);
userRouter.get("/:id", retrieveUserController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
userRouter.get("/:id/announcements", listAnnouncementWithUserController);
