const mongoose = require("mongoose");
const DBname = require("../constant");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DBname}`
    );
    console.log(
      `Connected to DB. DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Connection to DB FAIED !!! ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
