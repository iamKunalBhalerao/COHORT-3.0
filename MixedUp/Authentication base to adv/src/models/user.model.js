const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);

module.exports = User;
