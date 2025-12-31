import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "@repo/env/index";
import { UserPayload } from "../types/express";

const JWT_SECRET = env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error(
    "FATAL ERROR: JWT_SECRET is not defined in environment variables."
  );
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token || req.cookies?.access_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No Token provided!",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;

    req.user = decoded;

    next();
  } catch (error: any) {
    // Error catch: Expired Token
    if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Token has expierd!",
            code: "TOKEN_EXPIRED"
        })
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
        return res.status(403).json({
            success: false,
            message: "Forbiden: Invalid Token!",
        })
    }

    console.error("Auth Middleware Error:", error)
    res.status(500).json({
        success: false,
        message: "Internal Server Error!"
    })
    return;

  }
};
