import { Document, Schema, model } from "mongoose";
import { generateGravatar } from "../utils/generateGravatar";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  refreshToken: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
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

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
