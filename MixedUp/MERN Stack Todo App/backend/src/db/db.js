const mongoose = require("mongoose");
const { DBname } = require("../constatns");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DBname}`
    );
    console.log(
      `Connected to Database !! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database Connection FAILED : ", error);
  }
};

module.exports = connectDB;
