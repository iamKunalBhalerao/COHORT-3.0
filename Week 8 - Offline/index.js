const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { Username, email, password } = req.body;
});

function main() {
  mongoose.connect(
    "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/mongoDeepDive"
  );
  app.listen(3000, () => {
    console.log("server os on PORT:3000");
  });
}
main();
