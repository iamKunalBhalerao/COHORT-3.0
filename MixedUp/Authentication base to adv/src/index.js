require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/db");

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`ERRR: ${error}`);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on PORT:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Something Went Wrong : ${error}`);
  });
