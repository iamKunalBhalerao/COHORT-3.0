import app from "./app";
import connectDB from "./db/db";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is Running on PORT: ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log(
      `Error While Connecting DB or Running the server, Error: ${err}`
    );
    process.exit(1);
  });
