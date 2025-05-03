const { Router } = require("express");
const { signup, signin, logout } = require("../controllers/user.controller.js");

const UserRouter = Router();

UserRouter.route("/signup").post(signup);
UserRouter.route("/signin").post(signin);
UserRouter.route("/logout").post(logout);

module.exports = UserRouter;
