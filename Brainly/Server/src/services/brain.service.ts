import { Types } from "mongoose";
import { generateNanoId } from "../utils/helper";
import ApiError from "../ApiHandlers/ApiError";
import {
  createShareLinkInDB,
  findBrainContentInDB,
  findShortUrlInDB,
  reoveShareLinkFromDB,
} from "../dao/brain.dao";

export const ShareLinkService = async (
  share: boolean,
  userId: Types.ObjectId
) => {
  try {
    if (share) {
      const shortUrl = await generateNanoId(7);
      return await createShareLinkInDB(shortUrl, userId);
    } else {
      await reoveShareLinkFromDB(userId);
    }
  } catch (err) {
    throw err;
  }
};

export const dispayBrainService = async (shortUrl: string) => {
  try {
    const user = await findShortUrlInDB(shortUrl);
    if (!user) {
      throw new ApiError(404, "Brain Not Found!");
    }

    const userId = user.userId;

    const content = await findBrainContentInDB(userId);

    return content;
  } catch (err: any) {
    throw err;
  }
};
