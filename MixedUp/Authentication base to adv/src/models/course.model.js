const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required !!!"],
    },
    description: {
      type: String,
      required: [true, "Description is required !!!"],
    },
    price: {
      type: Number,
      required: [true, "Price is required !!!"],
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Course = model("Course", courseSchema);

module.exports = Course;
