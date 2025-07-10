import { Router } from "express";
import {
  createContent,
  deleteContent,
  displayContent,
} from "../controllers/content.controller";
import { isAuth } from "../middlewares/auth.middleware";

const contentRouter = Router();

contentRouter.route("/").post(isAuth, createContent);
contentRouter.route("/bulk").get(isAuth, displayContent);
contentRouter.route("/:contentId").delete(isAuth, deleteContent);

export default contentRouter;
