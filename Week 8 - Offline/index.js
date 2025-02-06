const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { Username, email, password } = req.body;
});

function main() {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(3000, () => {
    console.log("server os on PORT:3000");
  });
}
main();
