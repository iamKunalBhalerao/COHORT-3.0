const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use(cookieParser());

// User Route Imports
const UserRouter = require("./routes/user.route");
const courseRouter = require("./routes/course.route");

// User Route Defines
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/course", courseRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on PORT:3000`);
});
