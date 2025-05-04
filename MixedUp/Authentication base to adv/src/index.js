const express = require("express");
const connectDB = require("./db/db");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json();
    // console.log(finalData);

    res.status(finalData.code).json({
      finalData: finalData.data,
    });
  } catch (error) {
    res.status(403).json({
      message: "Someting went wrong while fetching data !!!",
      Error: error,
    });
  }
});

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on PORT:3000`);
});
