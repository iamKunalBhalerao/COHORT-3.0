const express = require("express");
const TodoRouter = require("./routes/Todo");

const app = express();

app.use(express.json());

app.use("/api/v1/", TodoRouter);

app.listen(3000, () => {
  console.log("server is running on POR:3000");
});
