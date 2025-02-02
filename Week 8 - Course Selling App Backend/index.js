const express = require("express");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use("api/v1/user", userRouter);
app.use("api/v1/admin", adminRouter);
app.use("api/v1/course", courseRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/Course-Selling-App"
  );

  app.listen(3000, () => {
    console.log("server is on PORT:3000");
  });
}

main();
