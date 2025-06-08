import { Router } from "express";
import {
  allUsers,
  getUserDetails,
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
userRouter.route("/bulk").get(searchFriend);
userRouter.route("/bulk").get(allUsers);
userRouter.route("/details").get(authMiddleware, getUserDetails);

export default userRouter;
