import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "@repo/env";
import {
  createRoomSchema,
  signInUserSchema,
  signUpUserSchema,
} from "@repo/common/types";
import { prisma } from "@repo/db";

interface SignUpUser {
  name: string;
  email: string;
  password: string;
}

type SignUpRequest = Request<{}, {}, SignUpUser>;

export const signupController = async (req: SignUpRequest, res: Response) => {
  try {
    const parsedData = signUpUserSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Inputs!",
      });
    }

    const { name, email, password } = parsedData.data;

    const isExistingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isExistingUser) {
      console.log(isExistingUser);
      return res.status(400).json({
        success: false,
        message: "User Alredy Exists! Please Sign In.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "User Signed Up successfully",
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server error.",
      Error: error.message,
    });
  }
};

interface SignInUser {
  email: string;
  password: string;
}

type SignInRequest = Request<{}, {}, SignInUser>;

export const signinController = async (req: SignInRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    const data = signInUserSchema.safeParse(req.body);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!data.success) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Inputs!",
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Does not Exists! Please Sign Up.",
      });
    }

    console.log(user);

    // const comparedPassword = await bcrypt.compare(password, hashedPassword)

    const token = await jwt.sign(
      {
        email,
        password,
      },
      env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("token", token).status(201).json({
      success: true,
      message: "User created successfully",
      email,
      token,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server error.",
      Error: error.message,
    });
  }
};

export const createRoomController = async (req: Request, res: Response) => {
  try {
    const roomId = Math.floor(Math.random() * 9999 + 1000);

    const data = createRoomSchema.safeParse(req.body);

    if (!data.success) {
      return res.status(400).json({
        message: "Incorrect inputs!",
      });
    }

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      roomId,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server error.",
      Error: error.message,
    });
  }
};
