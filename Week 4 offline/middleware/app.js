const express = require("express");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const id = Math.floor(Math.random() * 10000000);
  const age = req.body.age;

  if (age >= 14) {
    req.id = id;
    console.log(id);
  } else {
    res.status(402).json({
      msg: "you are under age",
    });
  }
  next();
});

app.use((req, res, next) => {
  const ticket = req.query.ticket;

  if (ticket === req.id) {
    next();
  } else {
    res.status(402).json({
      msg: "ticket is not correct",
    });
  }
});

app.get("/ride", (req, res) => {
  res.json({
    msg: "You rode the ride",
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
