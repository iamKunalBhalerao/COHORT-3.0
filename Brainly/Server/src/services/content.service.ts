import { Types } from "mongoose";
import ApiError from "../ApiHandlers/ApiError";
import {
  createContentInDB,
  deleteContentFromDB,
  displayUserContentsFromDB,
} from "../dao/content.dao";

interface Data {
  title: string;
  link: string;
  tags?: string[] | Types.ObjectId[];
  userId: string | Types.ObjectId;
}

export const createContentService = async (data: Data) => {
  try {
    if (!data.title || !data.link || !data.userId) {
      throw new ApiError(400, "All Fields Are are required fields.");
    }

    const userId =
      typeof data.userId === "string"
        ? new Types.ObjectId(data.userId)
        : data.userId;

    let tags: Types.ObjectId[] | undefined = undefined;
    if (data.tags) {
      tags = data.tags.map((tag) =>
        typeof tag === "string" ? new Types.ObjectId(tag) : tag
      );
    }

    const contentData = {
      ...data,
      userId,
      tags,
    };

    const content = await createContentInDB(contentData);
    if (!content) {
      throw new ApiError(500, "Failed to create content.");
    }

    return content;
  } catch (err) {
    throw err;
  }
};

export const displayUserContentService = async (
  userId: string | Types.ObjectId
) => {
  try {
    const contents = await displayUserContentsFromDB(userId);
    if (!contents || contents.length === 0) {
      throw new ApiError(404, "No content found for this user.");
    }
    return contents;
  } catch (err) {
    throw err;
  }
};

export const deleteContentService = async (
  contentId: string | Types.ObjectId
) => {
  try {
    if (!contentId) {
      throw new ApiError(400, "Content is Required !");
    }

    await deleteContentFromDB(contentId);
    return { message: "Content deleted successfully." };
  } catch (err) {
    throw err;
  }
};
