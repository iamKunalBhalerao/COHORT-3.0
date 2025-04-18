const { Router } = require("express");
const {
  seeAllTodos,
  updateTodo,
  CreateTodo,
  deleteTodo,
} = require("../controllers/todo.controller.js");

const TodoRouter = Router();

TodoRouter.get("/todos", seeAllTodos);

TodoRouter.post("/todo", CreateTodo);

TodoRouter.put("/completed", updateTodo);

TodoRouter.delete("/delete", deleteTodo);

module.exports = TodoRouter;
