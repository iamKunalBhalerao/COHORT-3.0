const express = require("express");
const app = express();
app.use(express.json());

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({ ans: a + b });
});

app.listen(3000);
