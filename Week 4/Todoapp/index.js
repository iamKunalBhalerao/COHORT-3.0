const express = require("express");
const app = express();

app.use(express.json());

const todos = [];

app.post("/addtodo", (req, res) => {
  // extract the title from a body
  // create a random todo id
  todos.push({
    title,
    id,
  });
});

app.delete("/delete", (req, res) => {
  // extract the todo id and remove the todo
});

app.get("/todos", (req, res) => {
  res.josn({
    todos,
  });
});

app.listen(3000);
console.log("server is onPORT:3000");
