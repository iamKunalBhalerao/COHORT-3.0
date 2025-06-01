import { Router } from "express";
import {
  refreshAccessAndRefreshToken,
  searchFriend,
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
userRouter.route("/searchfriend").get(authMiddleware, searchFriend);

export default userRouter;
