import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public error?: any;
  constructor(
    message: string,
    statusCode = 500,
    isOperational = true,
    error?: any
  ) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.error || null,
    });
    return;
  }

  console.error("Unhandled Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: err,
  });
};

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class EmptyFieldError extends AppError {
  constructor(message = "All Fields Are Required!") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, 401);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict Occured") {
    super(message, 409);
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, 500);
  }
}
