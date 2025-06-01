import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(403).json({
        message: "Auth Header not Found !!!",
      });
    }

    const { err, decoded } = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_JWT_SECRET,
      function (err, decoded) {
        return { err, decoded };
      }
    );

    if (err) {
      return res.status(403).json({
        message: "JWT Error",
        Error: err,
      });
    }

    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      res.status(403).json({
        message: "Invalid Access Token !!!",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(`Something Went Wrong in auth middleware !!! Error: ${error}`);
  }
};

export default authMiddleware;
