import {
  createRoomZodSchema,
  signInZodSchema,
  signUpZodSchema,
} from "@repo/common/zod.types";
import { httpCookieOption } from "@repo/common/common";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prismaClient from "@repo/database";
import jwt from "jsonwebtoken";
import env from "@repo/env/index";
import {
  CreateRoomRequest,
  SignInRequest,
  SignUpRequest,
} from "../types/user.types";

export const signUpController = async (req: SignUpRequest, res: Response) => {
  try {
    const parsedData = signUpZodSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Inputs!",
      });
    }

    const { fullName, email, password } = parsedData.data;

    const isUserAlredyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (isUserAlredyExists) {
      return res.status(400).json({
        success: false,
        message: "User Alredy Exists! Please Sign In.",
      });
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);

    const user = await prismaClient.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Error While creating user!",
      });
    }

    const token = await jwt.sign(
      { id: user?.id, email: user?.email },
      env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, httpCookieOption).status(200).json({
      success: true,
      message: "Signed Up Successfull.",
      id: user?.id,
      fullName: user?.fullName,
      email: user?.email,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      Error: error.messsage,
    });
  }
};

export const signInController = async (req: SignInRequest, res: Response) => {
  try {
    const parsedData = signInZodSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Inputs!",
      });
    }

    const { email, password } = parsedData.data;

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Exists! Please Sign Up.",
      });
    }

    const comparePassword = await bcrypt.compare(password, user?.password);

    if (!comparePassword) {
      return res.status(400).json({
        success: false,
        message: "Password or email is Incorrect!",
      });
    }

    const token = await jwt.sign(
      { id: user?.id, email: user?.email },
      env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, httpCookieOption).status(200).json({
      success: true,
      message: "Signed Ip Successfull.",
      id: user?.id,
      fullName: user?.fullName,
      email: user?.email,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      Error: error.messsage,
    });
  }
};

export const logOutController = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token").status(200).json({
      success: true,
      message: "Loged Out Successfully.",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      Error: error.messsage,
    });
  }
};

export const createRoomController = async (
  req: CreateRoomRequest,
  res: Response
) => {
  try {
    const parsedData = createRoomZodSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Inputs!",
      });
    }

    const { roomName } = parsedData.data;
    const adminId = req.user?.id;
    if (!adminId) {
      return res.status(401).json({
        success: false,
        message: "Unautharized Request!",
      });
    }

    const room = await prismaClient.room.create({
      data: {
        slug: roomName,
        adminId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Room is Created SuccessFully.",
      room,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      Error: error.messsage,
    });
  }
};

export const getRoomMessages = async (req: Request, res: Response) => {
  try {
    const roomId = Number(req.params.roomId);

    if (!roomId) {
      return res.status(400).json({
        success: false,
        message: "Room Id is Invalid",
      });
    }

    const messages = await prismaClient.chat.findMany({
      where: {
        roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });

    res.status(200).json({
      success: true,
      message: "Messages fetched successfyll of this room.",
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      Error: error.message,
    });
  }
};

export const findRoomBySlug = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Room Id is Invalid",
      });
    }

    const room = await prismaClient.room.findFirst({
      where: {
        slug,
      },
    });

    if (!room) {
      return res.status(400).json({
        success: false,
        message: "Room not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room fetched successfyll of this room.",
      slug: room.slug,
      roomId: room.id,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      Error: error.message,
    });
  }
};
