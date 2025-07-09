import User from "../models/user.model";

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
  return await User.create({
    username,
    email,
    password,
  });
};

export const findUserById = async (userId: any) => {
  return await User.findById(userId).select("-password -refreshToken");
};
