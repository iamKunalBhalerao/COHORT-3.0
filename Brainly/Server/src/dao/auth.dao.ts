import ApiError from "../ApiHandlers/ApiError";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const findUserByUsernameAndEmail = async (
  username: string,
  email: string
) => {
  return await User.findOne({
    $or: [{ username }, { email }],
  });
};

export const createUserInDB = async (
  username: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({
    username,
    email,
    password: hashedPassword,
  });
};

export const findUserById = async (userId: any) => {
  return await User.findById(userId).select("-password -refreshToken");
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const findUserByEmailAndComparePassword = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new ApiError(400, "Email or Password is Incorrect!");
  }

  if (!password) {
    throw new ApiError(400, "Password is Required!");
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Password is Incorrect!");
  }

  return user;
};
