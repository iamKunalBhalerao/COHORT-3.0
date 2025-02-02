const { Router } = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminRouter = Router();
const app = require("express");
const { AdminModel } = require("../db");
const { adminAuth, jwt_password } = require("../auth/adminAuth");

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

  const comparePassword = await bcrypt.compare(password, admin.password);

  if (comparePassword) {
    const token = jwt.sign({ id: admin._id.toString }, jwt_password);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      message: "INvalid Credentials",
    });
  }
});

adminRouter.post("/create-course", adminAuth, (req, res) => {});
adminRouter.put("/course-content", adminAuth, (req, res) => {});
adminRouter.get("/", adminAuth, (req, res) => {});
adminRouter.delete("/delete-course", adminAuth, (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
