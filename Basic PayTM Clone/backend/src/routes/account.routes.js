import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getUserBalance,
  transferFunds,
} from "../controllers/account.controller.js";

const accountRouter = Router();

accountRouter.route("/balance").get(authMiddleware, getUserBalance);
accountRouter.route("/transfer").post(authMiddleware, transferFunds);

export default accountRouter;
