const { Router } = require("express");
const { PurchaseModel, CourseModel } = require("../db");
const { userAuth } = require("../auth/userAuth");

const courseRouter = Router();

courseRouter.post("/purchase", userAuth, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await PurchaseModel.create({
    userId: userId,
    courseId: courseId,
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
