const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `Connected to Database. DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error while connecting to Database, DB ERROR:${error}`);
  }
};

module.exports = connectDB;
