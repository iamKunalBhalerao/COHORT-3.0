import app from "./app.js";
import { connectDB } from "./db/db.js";

connectDB()
  .then(
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is Running on PORT:${process.env.PORT || 3000}`);
    })
  )
  .catch((error) => {
    console.log(`Error While running the server !!!`);
  });
