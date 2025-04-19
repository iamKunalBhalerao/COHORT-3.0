const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

// Route Imports
const UserRouter = require("./routes/user.route.js");

// Route Declaration
app.use("/api/v1/user", UserRouter);

module.exports = app;
