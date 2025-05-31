import mongoose from "mongoose";
import { DBName } from "../config.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DBName}`
    );
    console.log(
      `Connected to DB Successfully !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error While COnnecting to DB !!! Error : ${error}`);
  }
};
