const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
