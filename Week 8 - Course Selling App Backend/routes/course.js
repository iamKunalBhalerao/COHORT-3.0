const { Router } = require("express");
const { CourseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {});
courseRouter.get("/previw", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
