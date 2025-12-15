import { Router } from "express";
import {
  createRoomController,
  signinController,
  signupController,
} from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const UserRouter: Router = Router();

UserRouter.route("/signup").post(signupController);
UserRouter.route("/signin").post(signinController);
UserRouter.route("/create-room").post(authMiddleware, createRoomController);

export default UserRouter;
