import mongoose, { Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "UserId is Required"],
      ref: "User",
    },
    balance: {
      type: Number,
      required: [true, "Balance is Required"],
    },
  },
  { timestamps: true }
);

const Account = model("Account", accountSchema);

export default Account;
