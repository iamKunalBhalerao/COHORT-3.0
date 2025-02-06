const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { UserModel } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  const { Username, email, password } = req.body;

  try {
    const user = await UserModel.create(req.body);
    res.status(200).json({
      message: "You are Signed up",
      userData: user,
    });
  } catch (e) {
    res.status(403).json({
      message: "User Alredy Exists",
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
