const express = require("express");
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Router } = require("express");
const { AdminModel, CourseModel } = require("../db");
const { adminAuth } = require("../auth/adminAuth");
const { JWT_ADMIN_PASSWORD } = require("../config");

const adminRouter = Router();
const app = express();

app.use(express.json());

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  // Admin Input Validation using zod
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    password: z
      .string()
      .min(3)
      .max(200)
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /[a-z]/.test(value), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((value) => /\d/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
  });

  const parseAdminDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseAdminDataWithSuccess.success) {
    res.status(403).json({
      message: "Invalid Email or Password",
      error: parseAdminDataWithSuccess.error.errors,
    });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await AdminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    res.status(200).json({
      message: "You are Signed Up",
    });
  } catch (e) {
    res.status(403).json({
      message: "User Alredy Exists",
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });

  if (!admin) {
    res.status(403).json({
      message: "User Not found",
    });
    return;
  }

  const compareAdminPassword = await bcrypt.compare(password, admin.password);

  if (compareAdminPassword) {
    const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      message: "INvalid Credentials",
    });
  }
});

adminRouter.post("/create-course", adminAuth, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageUrl } = req.body;

  const course = await CourseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId,
  });

  res.status(200).json({
    message: "Course Created",
    courseId: course._id,
  });
});

adminRouter.put("/course-content", adminAuth, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageUrl, courseId } = req.body;

  const course = await CourseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    }
  );

  res.status(200).json({
    message: "Course Updated",
    courseId: course._id,
  });
});
adminRouter.get("/course-bulk", adminAuth, async (req, res) => {
  const adminId = req.userId;
  try {
    const courses = await CourseModel.find({
      creatorId: adminId,
    });

    res.status(200).json({
      message: "Courses:",
      courses,
    });
  } catch (e) {
    res.status(403).json({
      message: "Something went wrong",
    });
  }
});

adminRouter.delete("/delete-course", adminAuth, async (req, res) => {
  const adminId = req.userId;

  const courseId = req.body.courseId;
  try {
    const course = await CourseModel.deleteOne({
      _id: courseId,
      creatorId: adminId,
    });

    res.status(200).json({
      message: "Course deleted",
      courseId: course._id,
    });
  } catch (e) {
    res.status(403).json({
      message: "Invalid credentials",
    });
  }
});

module.exports = {
  adminRouter: adminRouter,
};
