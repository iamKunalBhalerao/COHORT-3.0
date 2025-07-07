import { Router } from "express";
import {
  createContent,
  deleteContent,
  displayContent,
} from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.route("/").post(createContent);
contentRouter.route("/").get(displayContent);
contentRouter.route("/").delete(deleteContent);

export default contentRouter;
