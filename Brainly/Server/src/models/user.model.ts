import { Document, Schema, model } from "mongoose";
import { generateGravatar } from "../utils/generateGravatar";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  refreshToken: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  refreshToken: {
    type: String,
    select: false,
    default: "",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.avatar && this.email) {
    const avatar = await generateGravatar(this.email);
    this.avatar = avatar ?? "";
  }
  next();
});

const User = model<IUser>("User", userSchema);

export default User;
