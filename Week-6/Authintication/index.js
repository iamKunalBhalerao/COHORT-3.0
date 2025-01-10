const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwt_password = "This is password";
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.json({
    msg: "You have signed UP",
    username: username,
    password: password,
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ username: user.username }, jwt_password);
    user.token = token;

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Invalid username or password",
    });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const userDetails = jwt.verify(token, jwt_password);

  const username = userDetails.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.json({
      user: username,
    });
  } else {
    res.json({
      msg: "Unauthorized!",
    });
  }
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
