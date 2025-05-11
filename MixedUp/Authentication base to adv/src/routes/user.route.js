const { Router } = require("express");
const {
  signup,
  signin,
  logout,
  users,
} = require("../controllers/user.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

const UserRouter = Router();

UserRouter.route("/signup").post(signup);
UserRouter.route("/signin").post(signin);

// Secured Routes
UserRouter.route("/users").get(authMiddleware, users);
UserRouter.route("/logout").post(authMiddleware, logout);

module.exports = UserRouter;
