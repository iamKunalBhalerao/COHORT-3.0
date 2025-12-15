import { env } from "@repo/env";
import app from "./app";

app.listen(env.PORT, () => {
  console.log(`HTTP Server is running on PORT:${env.PORT}`);
});
