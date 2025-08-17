import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Chat App");
});

app.post("/signup", (req, res) => {
  res.send("This is Sign Up Page");
});

app.post("/signin", (req, res) => {
  res.send("This is Sign In Page");
});

app.listen(5000, () => {
  console.log("Server is running...");
});
