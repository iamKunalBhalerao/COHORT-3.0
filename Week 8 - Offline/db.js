const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
  UserName: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = model("user", UserSchema);

module.exports = {
  UserModel,
};
