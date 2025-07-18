import { Types } from "mongoose";
import Link from "../models/link.model";
import Content from "../models/content.model";

export const createShareLinkInDB = async (
  shortUrl: string,
  userId: Types.ObjectId
) => {
  return await Link.create({
    shortUrl,
    userId,
  });
};

export const reoveShareLinkFromDB = async (userId: Types.ObjectId) => {
  await Link.findOneAndDelete({ userId });
};

export const findShortUrlInDB = async (shortUrl: string) => {
  return await Link.findOne({ shortUrl });
};

export const findBrainContentInDB = async (userId: Types.ObjectId) => {
    return await Content.find({userId})
}