const { Router } = require("express");
const { signup, signin } = require("../controllers/user.controller.js");

const UserRouter = Router();

UserRouter.route("/signup").post(signup);
UserRouter.route("/signin").post(signin);

module.exports = UserRouter;
