const Todo = require("../models/Todo.model.js");
const { createTodoZod, updateTodoZod } = require("../types/types.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const CreateTodo = asyncHandler(async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodoZod.safeParse(createPayload);

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
    res.status(403).json("Something Went Wrong !!!", error);
  }
});

const seeAllTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      message: "This is All Todos all you created",
      Todos: todos,
    });
  } catch (error) {
    res.status(403).json("Something Went Wrong !!!", error);
  }
});

const updateTodo = asyncHandler(async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodoZod.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(403).json({
      message: "Invalid Credintials !!! Please try again later",
    });
  }

  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.body.id },
      { isComplete: true },
      { new: true }
    );

    if (!updateTodo) {
      res.status(403).json({
        message: "Something Went Wrong !!! Check Your Inputs",
      });
    }
    res.status(200).json({
      message: "Your Todo is mark as Completed.",
    });
  } catch (error) {
    res.status(403).json("Something Went Wrong while updating Todo !!!", error);
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    const user = await Todo.findByIdAndDelete({ _id: req.body.id });

    if(!user) {
        res.status(401).json({
          message: "Who Are You !!!",
        });
    }
    res.status(200).json({
      message: "Todo deleted Successfully.",
    });

  } catch (error) {
    res.status(402).json({
      message: "Something Went Wrong while deleting todo s!!!",
    });
  }
});

module.exports = {
  CreateTodo,
  seeAllTodos,
  updateTodo,
  deleteTodo,
};
