const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { auth, jwt_password } = require("./auth");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {});
app.post("/login", (req, res) => {});
app.post("/purchase-course", auth, (req, res) => {});
app.get("/courses", auth, (req, res) => {});

app.post("/admin-signup", (req, res) => {});
app.post("/admin-login", (req, res) => {});
app.post("/create-course", auth, (req, res) => {});
app.post("/delete-course", auth, (req, res) => {});
app.post("/add-course-content", auth, (req, res) => {});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
