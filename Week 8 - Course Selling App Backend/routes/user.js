const { Router } = require("express");
const userRouter = Router();
const { UserModel, CourseModel, PurchaseModel } = require("../db");
const { userAuth, jwt_password } = require("../auth/user");

userRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Hello",
  });
});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/purchases", userAuth, (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
