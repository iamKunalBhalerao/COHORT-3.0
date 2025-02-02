const { Router } = require("express");
const { AdminModel } = require("../db");

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {});
adminRouter.post("/signin", (req, res) => {});
adminRouter.post("/create-course", (req, res) => {});
adminRouter.put("/course-content", (req, res) => {});
adminRouter.get("/courses", (req, res) => {});
adminRouter.delete("/delete-course", (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
