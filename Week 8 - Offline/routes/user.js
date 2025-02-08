const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { UserModel, CourseModel } = require("../db/index");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });
  } catch (e) {
    res.status(403).json({
      message: "User Alredy Exists",
    });
  }

  res.status(200).json({
    message: "User Created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const admin = await UserModel.find({
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

router.get("/courses", async (req, res) => {
  // Implement fetching all courses logic
  const courses = await CourseModel.find({});

  res.status(200).json({
    Allcourses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;

  try {
    await UserModel.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourse: courseId,
        },
      }
    );
    res.status(200).json({
      message: "Course Purchsed Successfully",
    });
  } catch (e) {
    res.status(403).json({
      message: "Something went wrong",
      error: e,
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const user = await UserModel.findOne({
    username: req.headers.username,
  });

  const courses = await CourseModel.find({
    _id: {
      $in: user.purchasedCourse,
    },
  });
  res.status(200).json({
    courses: courses,
  });
});

module.exports = router;
