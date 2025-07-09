import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";
    const firstIssue = err.errors[0];
    errors = [
      {
        field: firstIssue.path.join("."),
        message: firstIssue.message,
      },
    ];
  }

  // Handle validation errors (example for Zod or Joi)
  if (err.name === "ValidationError" && err.details) {
    statusCode = 400;
    message = "Validation Error";
    errors = err.details.map((detail: any) => ({
      field: detail.path?.join(".") || "",
      message: detail.message,
    }));
  }

  // Handle MongoDB duplicate key error
  if (err.code && err.code === 11000) {
    statusCode = 409;
    message = "Duplicate key error";
    errors = [
      { field: Object.keys(err.keyValue)[0], message: "Already exists" },
    ];
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
