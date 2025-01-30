const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "password";
app.use(express.json());

const users = [];

// signup rout
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      msg: "Users is alredy axists!",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "you are signed in",
    username: username,
    password: password,
  });
});

// signin rout
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      founduser = users[i];
    }
  }

  if (founduser) {
    const token = jwt.sign({ username: username }, JWT_SECRET);

    // founduser.token = token;
    res.json({
      msg: token,
    });
  } else {
    res.json({
      msg: "Invalid Usernmae or Passoword",
    });
  }

  /*
  // simplear syntax to do the same logic on the top
  const founduser = users.find((u) => {
    if (u.username === usernmae && u.password === password) {
      return true;
    } else {
      return false;
    }
  });
*/
});

// get rout to display user signin info
app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedtokeninformation = jwt.verify(token, JWT_SECRET);

  const username = decodedtokeninformation.username;

  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      founduser = users[i];
    }
  }

  if (founduser) {
    res.json({
      username: founduser.username,
      password: founduser.password,
    });
  } else {
    res.json({
      msg: "Invalid Token",
    });
  }
});

app.listen(3000);
console.log("server is on PORT:3000");
