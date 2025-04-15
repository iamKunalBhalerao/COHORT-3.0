const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("Todo", TodoSchema);

module.exports = Todo;
