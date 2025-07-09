import { Request, Response } from "express";
import z from "zod";
import { AsyncHandler } from "../ApiHandlers/AsyncHandler";
import ApiResponse from "../ApiHandlers/ApiResponse";
import { signupService } from "../services/auth.service";

const signupSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be greater than 2 characters.")
    .max(100, "Username must be less than 100 characters."),
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(100),
});

type signupInput = z.infer<typeof signupSchema>;

export const signupController = AsyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;

    const { user, accessToken, refreshToken } = await signupService(data);

    res
      .status(200)
      .json(
        new ApiResponse(200, "User Sign Up Successfully", {
          user,
          accessToken,
          refreshToken,
        })
      );
  }
);

export const signinController = AsyncHandler(
  async (req: Request, res: Response) => {}
);

export const logoutController = AsyncHandler(
  async (req: Request, res: Response) => {
    // Example: Clear JWT token from cookies
    res.clearCookie("token");

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  }
);
