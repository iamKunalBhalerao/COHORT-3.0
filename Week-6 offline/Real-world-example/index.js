const express = require("express");
const jwt = require("jsonwebtoken");
const jwt_password = "thisisjsonwebtokenpassword";
const app = express();
app.use(express.json());

const users = [];

// Generating Token
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  const token = jwt.sign({ username }, jwt_password);
  res.status(200).json({
    token,
  });
});

// Verify Token
app.get("/signin", (req, res) => {
  const token = req.headers.token;
  const verifyedData = jwt.verify(token, jwt_password);

  const username = verifyedData.username;
  const user = users.find((user) => user.username === username);

  res.status(200).json({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000, () => {
  console.log("server is PORT:3000");
});
