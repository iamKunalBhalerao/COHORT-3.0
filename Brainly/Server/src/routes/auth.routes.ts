import { Router } from "express";
import {
  logoutController,
  signinController,
  signupController,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/signin").post(signinController);
authRouter.route("/logout").post(logoutController);

export default authRouter;
