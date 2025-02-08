const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { AdminModel, CourseModel } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    await AdminModel.create({
      username: username,
      password: password,
    });
  } catch (e) {
    res.status(403).json({
      message: "User Alredy Exists",
    });
  }

  res.status(200).json({
    message: "Admin Created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const admin = await AdminModel.find({
    username: username,
    password: password,
  });

  if (admin) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

router.post("/create", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageUrl } = req.body;

  try {
    const course = await CourseModel.create({
      title,
      description,
      price,
      imageUrl,
    });
    res.status(200).json({
      message: "Course Created",
      courseId: course._id,
    });
  } catch (e) {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await CourseModel.find({});

  res.status(200).json({
    Allcourses: courses,
  });
});

module.exports = router;
