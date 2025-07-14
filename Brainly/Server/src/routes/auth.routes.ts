import { Router } from "express";
import {
  isAuthenticatedController,
  logoutController,
  refreshTokensController,
  signinController,
  signupController,
} from "../controllers/auth.controller";
import { isAuth } from "../middlewares/auth.middleware";

const authRouter = Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/signin").post(signinController);
authRouter.route("/logout").post(logoutController);
authRouter.route("/refresh-token").post(isAuth, refreshTokensController);
authRouter.route("/isauth").get(isAuth, isAuthenticatedController);

export default authRouter;
