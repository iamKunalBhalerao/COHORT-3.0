const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./db");
require("dotenv").config();
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { Username, email, password } = req.body;

  const user = await UserModel.create({
    Username,
    email,
    password,
  });

  if (user) {
    res.status(200).json({
      message: "You are Signed Up",
    });
  } else {
    res.status(403).json({
      message: "User Alredy Exists",
    });
  }
});

function main() {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(3000, () => {
    console.log("server os on PORT:3000");
  });
}
main();
