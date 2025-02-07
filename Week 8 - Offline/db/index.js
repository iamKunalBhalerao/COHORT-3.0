const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const ObjectId = Schema.ObjectId;

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new Schema({
  username: String,
  password: String,
});

const UserSchema = new Schema({
  username: String,
  password: String,
  purchasedCourse: [
    {
      type: ObjectId,
      ref: "courses",
    },
  ],
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const AdminModel = model("admins", AdminSchema);
const UserModel = model("users", UserSchema);
const CourseModel = model("courses", CourseSchema);

module.exports = {
  AdminModel,
  UserModel,
  CourseModel,
};
