const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/Assignment-3"
);

// Define schemas
const AdminSchema = new Schema({
  Username: String,
  email: { type: String, unique: true },
  password: String,
});

const UserSchema = new Schema({
  Username: String,
  email: { type: String, unique: true },
  password: String,
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const AdminModel = model("admins", AdminSchema);
const UserModel = model("users", UserSchema);
const CourseModel = model("courses", CourseSchema);

module.exports = {
  AdminModel,
  UserModel,
  CourseModel,
};
