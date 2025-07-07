import { Router } from "express";
import { displayBrain, shareBrain } from "../controllers/brain.controller";

const brainRouter = Router();

brainRouter.route("/share").post(shareBrain);
brainRouter.route("/:sharelink").get(displayBrain);

export default brainRouter;
