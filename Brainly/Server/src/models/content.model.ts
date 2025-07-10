import mongoose, { ObjectId, Schema, model } from "mongoose";

interface Content {
  title: string;
  link: string;
  tags?: ObjectId[];
  userId: ObjectId;
}

interface Tags {
  title: string;
}

const tagsSchema = new Schema<Tags>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

const contentSchema = new Schema<Content>({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: [tagsSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Content = model<Content>("Content", contentSchema);

export default Content;
