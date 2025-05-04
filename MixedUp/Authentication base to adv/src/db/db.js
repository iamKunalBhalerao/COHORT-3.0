const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://kunalbhalerao789:kunal%407890@dbadvanced.fba8g5o.mongodb.net/advbackend"
    );
    console.log(`Connected To Database.`);
  } catch (error) {
    console.log(`Error while connecting to Database, DB ERROR:${error}`);
  }
};

module.exports = connectDB;
