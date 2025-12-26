import { Router } from "express";
import {
  createRoomController,
  getRoomMessages,
  logOutController,
  signInController,
  signUpController,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const userRouter: Router = Router();

userRouter.route("/signup").post(signUpController);
userRouter.route("/signin").post(signInController);
userRouter.route("/logout").post(logOutController);
userRouter.route("/create-room").post(authMiddleware, createRoomController);
userRouter.route("/chats/:roomId").get(authMiddleware, getRoomMessages);

export default userRouter;
