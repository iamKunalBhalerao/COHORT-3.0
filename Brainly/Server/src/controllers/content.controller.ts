import { Types } from "mongoose";
import ApiResponse from "../ApiHandlers/ApiResponse";
import { AsyncHandler } from "../ApiHandlers/AsyncHandler";
import {
  createContentService,
  deleteContentService,
  displayUserContentService,
} from "../services/content.service";
import { Request, Response } from "express";
import ApiError from "../ApiHandlers/ApiError";

// Define a custom type for user payload
interface UserPayload {
  _id: string;
  // add other fields if needed
}

interface AuthRequest extends Request {
  user?: UserPayload | string;
  title?: string;
  link?: string;
  tags?: string[];
}

interface ContentData {
  title: string;
  link: string;
  tags?: string[] | Types.ObjectId[];
  userId: string | Types.ObjectId;
}

export const createContent = AsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { title, link, tags } = req.body;

    // Type guard for user
    let userId: string | undefined;
    if (req.user && typeof req.user !== "string" && "_id" in req.user) {
      userId = req.user._id;
    }

    if (!title || !link || !userId) {
      throw new ApiError(400, "Title, link, and userId are required.");
    }

    const contentData: ContentData = {
      title,
      link,
      tags: tags || [],
      userId,
    };

    const content = await createContentService(contentData);

    res
      .status(201)
      .json(new ApiResponse(200, "Content created successfully", content));
  }
);

export const displayContent = AsyncHandler(
  async (req: AuthRequest, res: Response) => {
    // Type guard for user
    const userId =
      req.user && typeof req.user !== "string" && "_id" in req.user
        ? req.user._id
        : undefined;

    if (!userId) {
      throw new ApiError(400, "User ID is required.");
    }
    const contents = await displayUserContentService(userId);

    res
      .status(200)
      .json(
        new ApiResponse(200, "User content retrieved successfully", contents)
      );
  }
);

export const deleteContent = AsyncHandler(
  async (req: Request, res: Response) => {
    const { message } = await deleteContentService(req.params.contentId);
    res.status(200).json(new ApiResponse(200, message, null));
  }
);
