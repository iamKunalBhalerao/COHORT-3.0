import { Router } from "express";
import {
  logoutController,
  refreshTokensController,
  signinController,
  signupController,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/signin").post(signinController);
authRouter.route("/logout").post(logoutController);
authRouter.route("/refresh-token").post(refreshTokensController);

export default authRouter;
