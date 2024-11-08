const express = require("express");
const app = express();

app.use(express.json());

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry You are under age for ride!",
    });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully road the ride1.",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully road the ride2.",
  });
});

app.get("/ride3", (req, res) => {
  res.json({
    msg: "You have successfully road the ride3.",
  });
});

app.listen(3000);
console.log("server is on PORT:3000");
