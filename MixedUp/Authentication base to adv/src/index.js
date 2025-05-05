const express = require("express");
const connectDB = require("./db/db");
const app = express();

app.use(express.json());

// User Route Imports
const UserRouter = require("./routes/user.route");
const courseRouter = require("./routes/course.route");

// User Route Defines
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on PORT:3000`);
});
