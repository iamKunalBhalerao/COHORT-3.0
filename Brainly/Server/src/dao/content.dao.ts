import { Types } from "mongoose";
import Content from "../models/content.model";

export const createContentInDB = async (data: any) => {
  return await Content.create(data);
};

export const displayUserContentsFromDB = async (
  userId: string | Types.ObjectId
) => {
  return await Content.find({ userId });
};

export const deleteContentFromDB = async (
  contentId: string | Types.ObjectId
) => {
  await Content.findByIdAndDelete(contentId);
};
