const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwt_password = "Thisispasswordprotected";
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.status(200).json({
    msg: "You have signed up",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((user) => user.username === username);

  if (user) {
    const token = jwt.sign({ username }, jwt_password);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Invalid Crendentials!!!",
    });
  }
});

app.use((req, res, next) => {
  console.log("Request Method : " + req.method);
  next();
});

app.use((req, res, next) => {
  const token = req.headers.authorization;
  const userDetails = jwt.verify(token, jwt_password);

  if (userDetails.username) {
    req.username = userDetails.username;
    console.log("You are Logged in");
    next();
  } else {
    res.status(403).json({
      msg: "You are not Logged IN",
    });
  }
});

app.get("/me", (req, res) => {
  const user = users.find((user) => user.username === req.username);

  res.status(200).json({
    username: user.username,
    password: user.password,
  });
});

app.get("/just", (req, res) => {
  res.json({
    msg: "This is just try for fun",
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
