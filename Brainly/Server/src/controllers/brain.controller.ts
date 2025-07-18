import { Request, Response } from "express";
import ApiResponse from "../ApiHandlers/ApiResponse";
import { AsyncHandler } from "../ApiHandlers/AsyncHandler";
import {
  dispayBrainService,
  ShareLinkService,
} from "../services/brain.service";
import { Types } from "mongoose";
import ApiError from "../ApiHandlers/ApiError";

interface ReqUser {
  _id?: Types.ObjectId
}

export interface RequestInterface extends Request {
  user: ReqUser;
}

export const shareBrain = AsyncHandler(
  async (req: RequestInterface, res: Response) => {
    const { share } = req.body;
    const userId = req.user?._id;

    if (typeof share !== "boolean") {
      throw new ApiError(401, "Share Parameter must be true or false!");
    }

    if (!userId) {
      throw new ApiError(401, "User not Authenticated!");
    }

    try {
      const result = await ShareLinkService(share, userId);
      res
        .status(200)
        .json(
          new ApiResponse(200, "Brain Share Updated Successfully.", result)
        );
    } catch (err) {
      throw err
    }
  }
);

export const displayBrain = AsyncHandler(
  async (req: Request, res: Response) => {
    const shortUrl = req.params.sharelink;
    if (!shortUrl) {
      throw new ApiError(404, "Invalid Link");
    }

    const result = await dispayBrainService(shortUrl);

    if (result) {
      return res
        .status(200)
        .json(
          new ApiResponse(200, "Content of User Fetched Successfully", result)
        );
    } else {
      throw new ApiError(500, "Something Went Wrong!");
    }
  }
);
