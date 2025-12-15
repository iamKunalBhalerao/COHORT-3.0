import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "@repo/env";

interface SignUpUser {
  name: string;
  email: string;
  password: string;
}

type SignUpRequest = Request<{}, {}, SignUpUser>;

export const signupController = async (req: SignUpRequest, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      name,
      email,
      password: hashedPassword,
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

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

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
    try{

      const roomId = Math.floor(Math.random() * 9999 + 1000)

     res.status(201).json({
      success: true,
      message: "Room created successfully",
      roomId
    }); 
    }catch(error: any){
        res.status(500).json({
          success: false,
          message: "Internal Server error.",
          Error: error.message,
        });
    }
}