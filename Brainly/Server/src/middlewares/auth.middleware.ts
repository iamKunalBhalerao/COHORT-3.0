import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import ApiError from "../ApiHandlers/ApiError";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Access Denide. No token provided");
    }

    const decoded = jwt.verify(
      token,
      process.env.ACCESSTOKEN_JWT_SECRET as string
    );
    if (!decoded) {
      throw new ApiError(401, "Access Denide. Invalid token");
    }

    req.user = decoded;
    next();
  } catch (err) {
    next(new ApiError(401, "Access Denide. Invalid token"));
  }
};
