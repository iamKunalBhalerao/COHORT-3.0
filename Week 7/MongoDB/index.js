const express = require("express");
const jwt = require("jsonwebtoken");
const { auth, jwt_password } = require("./auth");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

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
    msg: "You are Sign up",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, jwt_password);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Credentials Incorrect",
    });
  }
});

// app.use((req, res, next) => {
//   const token = req.headers.token;

//   const decodedData = jwt.verify(token, jwt_password);

//   if (decodedData) {
//     req.userId = decodedData.id;
//     next();
//   } else {
//     res.status(403).json({
//       msg: "Invalid Credenitials",
//     });
//   }
// });

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const description = req.body.description;

  await TodoModel.create({
    userId: userId,
    title: title,
    description: description,
  });

  res.json({
    userId,
    title,
    description,
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
