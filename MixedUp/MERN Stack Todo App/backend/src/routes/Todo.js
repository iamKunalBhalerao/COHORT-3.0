const { Router } = require("express");
const { createTodo, updateTodo } = require("../types/types");
const Todo = require("../models/Todo.model");

const TodoRouter = Router();

TodoRouter.get("/todos", (req, res, next) => {
  try {
    res.status(200).json({
      message: "This is All Todos all you created",
    });
  } catch (error) {
    next(error);
  }
});

TodoRouter.post("/todo", async (req, res, next) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(403).json({
      message: "Check Your Inputs",
    });
    return;
  }

  try {
    const todo = await Todo.create(req.body);

    res.status(200).json({
      message: "Todo is Created !",
      todo: {
        title: todo.title,
        description: todo.description,
      },
    });
  } catch (error) {
    next(error);
  }
});

TodoRouter.put("/completed", (req, res, next) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(403).json({
      message: "Invalid Credintials !!! Please try again later",
    });
  }

  try {

    const updateTodo = Todo

    res.status(200).json({
      message: "Mark your Todo as Completed",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = TodoRouter;
