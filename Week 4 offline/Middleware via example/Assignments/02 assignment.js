const express = require("express");
const app = express();

let noOfRequestForUser = {};
setInterval(() => {
  noOfRequestForUser = {};
}, 1000);

app.use((req, res, next) => {
  const userid = req.headers["user-id"];
  if (noOfRequestForUser[userid]) {
    noOfRequestForUser[userid] = noOfRequestForUser[userid] + 1;
    if (noOfRequestForUser[userid] > 5) {
      res.status(404).send("No Entry");
    } else {
      next();
    }
  } else {
    noOfRequestForUser[userid] = 1;
    next();
  }
  next();
});

app.get("/user", (req, res) => {
  res.status(200).json({ name: "Kunal" });
});

app.listen(3000);
 