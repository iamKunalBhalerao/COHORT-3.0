const { Router } = require("express");
const adminRouter = Router();
const app = require("express");
const { AdminModel } = require("../db");
const { adminAuth, jwt_password } = require("../auth/adminAuth");

adminRouter.post("/signup", (req, res) => {});
adminRouter.post("/signin", (req, res) => {});
adminRouter.post("/create-course", adminAuth, (req, res) => {});
adminRouter.put("/course-content", adminAuth, (req, res) => {});
adminRouter.get("/", adminAuth, (req, res) => {});
adminRouter.delete("/delete-course", adminAuth, (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
