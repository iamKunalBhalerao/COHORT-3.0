const { Router } = require("express");
const courseRouter = Router();

const {
  allCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");
const authMiddleware = require("../middlewares/auth.middleware");

courseRouter.route("/courses").get(allCourses);
courseRouter.route("/create").post(authMiddleware, createCourse);
courseRouter.route("/update").put(authMiddleware, updateCourse);
courseRouter.route("/delete").delete(authMiddleware, deleteCourse);

module.exports = courseRouter;
