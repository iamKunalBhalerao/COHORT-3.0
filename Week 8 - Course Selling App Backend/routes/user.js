const { Router } = require("express");
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const { UserModel, CourseModel, PurchaseModel } = require("../db");
const { userAuth, jwt_password } = require("../auth/userAuth");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  // User Input Validation using zod
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    password: z
      .string()
      .min(3)
      .max(100)
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

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.status(403).json({
      message: "Invalid Email or Password",
      error: parseDataWithSuccess.error.errors,
    });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
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
      message: "User Alredy exists",
    });
    return;
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(403).json({
      message: "User Not Found",
    });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (comparePassword) {
    const token = jwt.sign({ id: user._id.toString }, jwt_password);
    res.status(200).json({
      token,
    });
    return;
  } else {
    res.status(304).json({
      message: "Invalid Credentials",
    });
  }
});

userRouter.get("/purchases", userAuth, (req, res) => {
  res.json({
    message: "Hello",
  });
});

module.exports = {
  userRouter: userRouter,
};
