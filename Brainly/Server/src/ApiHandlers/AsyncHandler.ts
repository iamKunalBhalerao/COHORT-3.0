import { NextFunction, Request, Response } from "express";

export const AsyncHandler = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err: any) => next(err));
  };
};
