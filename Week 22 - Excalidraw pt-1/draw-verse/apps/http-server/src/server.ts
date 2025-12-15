import { env } from "@repo/env";
import app from "./app";

app.listen(env.HTTP_PORT, () => {
  console.log(`HTTP Server is running on PORT:${env.HTTP_PORT}`);
});
