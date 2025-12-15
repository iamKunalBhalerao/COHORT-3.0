import "express";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "@repo/env";

declare global {
  namespace Express {
    interface Request {
      user?: { email: string };
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token as string | undefined;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unautherized Acccess!",
      });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);

    if (
      typeof decoded === "object" &&
      "email" in decoded &&
      typeof decoded.email === "string"
    ) {
      req.user = { email: decoded.email };
      return next();
    }

    return res.status(401).json({
      success: false,
      message: "Unauthorized Access!",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Unautherized Access!",
      Error: error.message,
    });
  }
};
