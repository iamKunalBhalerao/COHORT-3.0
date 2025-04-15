require("dotenv").config();
const express = require("express");
const TodoRouter = require("./routes/Todo");
const connectDB = require("./db/db");

const app = express();

app.use(express.json());

app.use("/api/v1/", TodoRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is running on PORT${process.env.PORT}`);
});
