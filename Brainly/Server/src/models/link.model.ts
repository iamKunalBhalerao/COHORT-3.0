import mongoose, { Schema, Types, model } from "mongoose";

interface ShareLink {
  shortUrl: string;
  userId: Types.ObjectId;
}

const ShareLinkSchema = new Schema<ShareLink>({
  shortUrl: {
    type: String,
    unique: true,
    index: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    requird: true,
    unique: true,
  },
});

const Link = model("ShareLink", ShareLinkSchema);
export default Link;
