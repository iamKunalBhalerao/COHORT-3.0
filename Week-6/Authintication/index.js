const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwt_pass = "thisisjwtpassword";
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((user) => user.username === username);

  if (user) {
    res.json({
      msg: "User Already Exists!!!",
    });
  } else {
    users.push({
      username,
      password,
    });
    res.json({
      message: "You have signed up",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ username: username }, jwt_pass);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Invalid Credintials",
    });
  }
});

app.use((req, res, next) => {
  const token = req.headers.authorization;
  const decodedData = jwt.verify(token, jwt_pass);
  const username = decodedData.username;

  if (username) {
    req.username = username;
    next();
  } else {
    res.json({
      msg: "you are not logged in",
    });
  }
});

app.get("/me", (req, res) => {
  const user = users.find((user) => user.username === req.username);

  res.send({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000, () => {
  console.log("server is on OPRT:3000");
});
