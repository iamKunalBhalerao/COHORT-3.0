const { Router } = require("express");
const { PurchaseModel, CourseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await PurchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "You have successfull bought the course",
  });
});
courseRouter.get("/preview", async (req, res) => {
  const courses = await CourseModel.find({});

  res.status(200).json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
