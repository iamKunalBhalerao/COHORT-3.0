import { Request, Response } from "express";
import { AsyncHandler } from "../ApiHandlers/AsyncHandler";
import ApiError from "../ApiHandlers/ApiError";
import ApiResponse from "../ApiHandlers/ApiResponse";
import {
  refreshTokensService,
  signinService,
  signupService,
} from "../services/auth.service";
import { cookieOptions } from "../utils/helper";

interface CookieOption {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "none" | "lax" | "strict";
}

export const signupController = AsyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;

    const { user, accessToken, refreshToken } = await signupService(data);

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions as CookieOption)
      .cookie("refreshToken", refreshToken, cookieOptions as CookieOption)
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
  async (req: Request, res: Response) => {
    const data = req.body;

    const { user, accessToken, refreshToken } = await signinService(data);

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions as CookieOption)
      .cookie("refreshToken", refreshToken, cookieOptions as CookieOption)
      .json(
        new ApiResponse(200, "User Sign In Successfully", {
          user,
          accessToken,
          refreshToken,
        })
      );
  }
);

export const logoutController = AsyncHandler(
  async (req: Request, res: Response) => {
    res.clearCookie("token");

    res
      .status(200)
      .clearCookie("accessToken", cookieOptions as CookieOption)
      .clearCookie("refreshToken", cookieOptions as CookieOption)
      .json({
        success: true,
        message: "Logout successful",
      });
  }
);

export const refreshTokensController = AsyncHandler(
  async (req: Request, res: Response) => {
    const token = req.cookies?.refreshToken;
    if (!token) {
      throw new ApiError(401, "No refresh token provided");
    }

    const { accessToken, refreshToken } = await refreshTokensService(token);

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions as CookieOption)
      .cookie("refreshToken", refreshToken, cookieOptions as CookieOption)
      .json({
        success: true,
        message: "Tokens refreshed successfully",
        data: { accessToken, refreshToken },
      });
  }
);

export const isAuthenticatedController = AsyncHandler(
  async (req: Request, res: Response) => {
    const user = req.user; // Assuming user is set in middleware

    if (!user) {
      throw new ApiError(401, "User not authenticated");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "User is authenticated", { user }));
  }
);
