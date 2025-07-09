const jwt = require("jsonwebtoken");
import ApiError from "../ApiHandlers/ApiError";
import { findUserById } from "../dao/auth.dao";

export const generateAccessAndRefreshToken = async (userId: any) => {
  const accessSecret = process.env.ACCESSTOKEN_JWT_SECRET as string;
  const refreshSecret = process.env.REFRESHTOKEN_JWT_SECRET as string;
  const accessExpiry = process.env.ACCESSTOKEN_EXPIREY as string;
  const refreshExpiry = process.env.REFRESHTOKEN_EXPIREY as string;

  if (!accessSecret || !refreshSecret || !accessExpiry || !refreshExpiry) {
    throw new Error("JWT secrets are not defined in environment variables");
  }

  const accessToken = jwt.sign({ _id: userId }, accessSecret, {
    expiresIn: accessExpiry,
  });
  const refreshToken = jwt.sign({ _id: userId }, refreshSecret, {
    expiresIn: refreshExpiry,
  });

  const finalUser = await findUserById(userId);
  if (!finalUser) {
    throw new ApiError(501, "Something went wrong !!!");
  }

  finalUser.refreshToken = refreshToken;
  await finalUser.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};
