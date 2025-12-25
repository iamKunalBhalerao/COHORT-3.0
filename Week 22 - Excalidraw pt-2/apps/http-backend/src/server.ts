import env from "@repo/env/index";
import app from "./app";

app.listen(env.HTTP_PORT, () => {
  console.log("Server is running...");
});
