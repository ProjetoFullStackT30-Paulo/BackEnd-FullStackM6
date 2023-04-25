import { Router } from "express";
import {
  createRecoveryController,
  createUserController,
  deleteUserController,
  listAnnouncementWithUserController,
  listUserController,
  loginUserController,
  profileUserController,
  retrieveUserController,
  updatePasswordController,
  updateUserController,
} from "../controllers";
import {
  validateSchemaMiddleware,
  verifyProfileOwner,
  verifyRecoveryIsValid,
  verifyUserIsAuthenticated,
} from "../middlewares";
import {
  PasswordUpdateSchema,
  RecoveryCreateSchema,
  UserCreateSchema,
  UserLoginSchema,
  UserUpdateRequestSchema,
} from "../schemas";

export const userRouter = Router();

userRouter.post(
  "",
  validateSchemaMiddleware(UserCreateSchema),
  createUserController
);

userRouter.get("", listUserController);

userRouter.get("/profile", verifyUserIsAuthenticated, profileUserController);

userRouter.get("/:id", retrieveUserController);

userRouter.patch(
  "/password",
  verifyRecoveryIsValid,
  validateSchemaMiddleware(PasswordUpdateSchema),
  updatePasswordController
);

userRouter.patch(
  "/:id",
  verifyUserIsAuthenticated,
  verifyProfileOwner,
  validateSchemaMiddleware(UserUpdateRequestSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  verifyProfileOwner,
  deleteUserController
);

userRouter.get(
  "/:id/announcements",
  verifyUserIsAuthenticated,
  listAnnouncementWithUserController
);

userRouter.post(
  "/password",
  validateSchemaMiddleware(RecoveryCreateSchema),
  createRecoveryController
);

export const sessionRouter = Router();

sessionRouter.post(
  "",
  validateSchemaMiddleware(UserLoginSchema),
  loginUserController
);
