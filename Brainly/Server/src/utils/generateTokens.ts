const jwt  = require("jsonwebtoken")

export const generateAccessAndRefreshToken = (userId: any) => {
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
  return { accessToken, refreshToken };
};