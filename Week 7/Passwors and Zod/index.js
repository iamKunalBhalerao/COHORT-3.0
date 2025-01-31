const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const { auth, jwt_password } = require("./auth");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/my-todo-app"
);

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.status(200).json({
    message: "You are Signed Up",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, jwt_password);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credintials",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const description = req.body.description;

  const todo = await TodoModel.create({
    userId: userId,
    title: title,
    description: description,
  });

  res.status(200).json({
    todo,
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.status(200).json({
    todos,
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
