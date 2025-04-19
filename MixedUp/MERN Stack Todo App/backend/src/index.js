require("dotenv").config();
const express = require("express");
const TodoRouter = require("./routes/Todo");
const connectDB = require("./db/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/v1/", TodoRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`server is running on PORT:${process.env.PORT}`);
});
