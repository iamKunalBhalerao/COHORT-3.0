import mongoose from "mongoose";
import { DBName } from "../config";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DBName}`
    );
    console.log(
      `Connected to DB, DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log(`Error While Connecting DB, Error: ${err}`);
  }
};

export default connectDB;
