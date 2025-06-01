import { Router } from "express";
import {
  refreshAccessAndRefreshToken,
  signin,
  signup,
  updateUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);
userRouter.route("/refreshtokens").post(refreshAccessAndRefreshToken);
userRouter.route("/update").put(authMiddleware, updateUser);

export default userRouter;
