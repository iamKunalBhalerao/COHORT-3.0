import AsyncHandler from "../utils/AsyncHandler";
import { Request, Response, NextFunction } from "express";

export const signupController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = req.body;

      res.send("This is Signup Endpoint");
    } catch (err) {
      next(err);
    }
  }
);

export const signinController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("This is Signin Endpoint");
    } catch (err) {
      next(err);
    }
  }
);

export const logoutController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("This is logout Endpoint");
    } catch (err) {
      next(err);
    }
  }
);
