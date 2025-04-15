const { Router } = require("express");
const { createTodo, updateTodo } = require("../types/types");
const Todo = require("../models/Todo.model");

const TodoRouter = Router();

TodoRouter.get("/todos", async (req, res, next) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      message: "This is All Todos all you created",
      Todos: todos,
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

TodoRouter.put("/completed", async (req, res, next) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(403).json({
      message: "Invalid Credintials !!! Please try again later",
    });
  }

  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.body.id },
      { isComplete: req.body.isComlete }
    );

    if (!updateTodo) {
      res.status(403).json({
        message: "Something Went Wrong !!! Check Your Inputs",
      });
    }

    await Todo.deleteOne({ _id: req.body.id });

    res.status(200).json({
      message: "Your Todo is Completed and Deleted from Database !",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = TodoRouter;
