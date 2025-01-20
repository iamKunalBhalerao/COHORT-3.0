const express = require("express");
const app = express();
app.use(express.json());

let reqCount = 0;

app.use((req, res, next) => {
  reqCount++;
  console.log(`request count ${reqCount}`);
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, (req, res) => {
  console.log("server on PORT:3000");
});
