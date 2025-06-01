import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: [true, "Username is Required"],
      unique: [true, "Username Should be Unique"],
      index: true,
    },
    lastName: {
      type: String,
      require: [true, "Username is Required"],
      unique: [true, "Username Should be Unique"],
      index: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: [true, "Email should be Unique"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
