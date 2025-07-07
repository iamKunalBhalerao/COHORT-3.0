import { Router } from "express";
import {
  logoutController,
  signinController,
  signupController,
} from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/signin").post(signinController);
userRouter.route("/logout").post(logoutController);

export default userRouter;
