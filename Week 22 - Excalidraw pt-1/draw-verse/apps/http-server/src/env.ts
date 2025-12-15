import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import path from "path";
import z from "zod";
import { baseServerSchema } from "@repo/env";

config({ path: path.join(__dirname, "../.env") });

export const env = createEnv({
  server: {
    // Include all base variables
    ...baseServerSchema,

    // Add http-server specific variables
  },

  client: {
    // Example PUBLIC_API_URL: z.string().url()
  },

  clientPrefix: "",

  runtimeEnv: process.env,

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
