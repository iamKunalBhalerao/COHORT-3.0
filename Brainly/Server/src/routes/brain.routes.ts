import { Router } from "express";
import { displayBrain, shareBrain } from "../controllers/brain.controller";
import { isAuth } from "../middlewares/auth.middleware";

const brainRouter = Router();

brainRouter.route("/share").post(isAuth, shareBrain);
brainRouter.route("/:sharelink").get(displayBrain);

export default brainRouter;
