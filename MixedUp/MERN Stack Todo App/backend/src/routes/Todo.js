const { Router } = require("express");

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

TodoRouter.post("/todo", (req, res, next) => {
  try {
    res.status(200).json({
      message: "Create a Todo for you",
    });
  } catch (error) {
    next(error);
  }
});

TodoRouter.put("/completed", (req, res, next) => {
  try {
    res.status(200).json({
      message: "Mark your Todo as Completed",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = TodoRouter;
