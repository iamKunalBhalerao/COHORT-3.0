const { Router } = require("express");
const userRouter = Router();
const { UserModel, CourseModel, PurchaseModel } = require("../db");

userRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Hello",
  });
});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
