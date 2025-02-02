const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  FirstName: String,
  lastName: String,
});

const AdminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  FirstName: String,
  lastName: String,
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const PurchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const UserModel = model("users", UserSchema);
const AdminModel = model("admins", AdminSchema);
const CourseModel = model("courses", CourseSchema);
const PurchaseModel = model("purchase", PurchaseSchema);

module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
};
