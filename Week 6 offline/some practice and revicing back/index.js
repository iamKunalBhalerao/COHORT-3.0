const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwt_password = "thisisjsonwebtokenpassword";
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

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
      msg: "INvalid Crenditials",
    });
  }
});

app.use((req, res, next) => {
  const token = req.headers.token;
  const userDetails = jwt.verify(token, jwt_password);

  if (userDetails.username) {
    req.username = userDetails.username;
    next();
  } else {
    res.status(403).json({
      msg: "Unauthorized",
    });
  }
});

app.get("/me", (req, res) => {
  const user = users.find((user) => user.username === req.username);

  res.status(200).json({
    msg: "welcome " + user.username,
    username: user.username,
    password: user.password,
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
