import { Router } from "express";
import {
  refreshAccessAndRefreshToken,
  signin,
  signup,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);
userRouter.route("/refreshtokens").post(refreshAccessAndRefreshToken);

export default userRouter;
