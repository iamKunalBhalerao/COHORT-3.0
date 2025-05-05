const { Router } = require("express");
const courseRouter = Router();

const {
  allCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");

courseRouter.get("/courses", allCourses);
courseRouter.post("/create", createCourse);
courseRouter.put("/update", updateCourse);
courseRouter.delete("/delete", deleteCourse);

module.exports = courseRouter;
