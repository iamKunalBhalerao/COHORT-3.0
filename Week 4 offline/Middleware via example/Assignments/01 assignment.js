const express = require("express");
const app = express();

let requestCount = 0;

app.get("/requestcount", (req, res) => {
  res.status(200).json({ "your request count is": requestCount });
});

app.use((req, res, next) => {
  requestCount = requestCount + 1;
  next();
});

app.get("/user", (req, res) => {
  res.status(200).json({ name: "kunal" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ msg: "This is dummy user!" });
});

app.listen(3000);
