const zod = require("zod");

const createTodoZod = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodoZod = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodoZod,
  updateTodoZod,
};
