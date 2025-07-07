import app from "./app.ts";
import connectDB from "./db/db.ts";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is Runing on PORT: ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log(
      `Error While Connecting DB or Running th server, Error: ${err}`
    );
  });
