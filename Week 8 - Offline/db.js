const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
  Username: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = model("users", UserSchema);

module.exports = {
  UserModel,
};
