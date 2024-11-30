const express = require("express");
const app = express();
app.use(express.json());

let requestcount = 0;

app.use((req, res, next) => {
  requestcount = requestcount + 1;
  console.log(`No. of request on server is : ${requestcount}`);
  next();
});

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({ ans: a + b });
});

app.listen(3000);
