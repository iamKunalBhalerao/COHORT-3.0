import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import path from "path";
import z from "zod";

config({ path: path.resolve(__dirname, "../.env") });

export const baseServerSchema = {
  // ENVIRNMENTS
  HTTP_PORT: z.coerce.number().positive().default(3001),
  WS_PORT: z.coerce.number().positive().default(8080),

  // DATABASE
  DATABASE_URL: z.string().url(),

  // JWT SECTRETS
  JWT_SECRET: z.string().min(18),

  SKIP_ENV_VALIDATION: z.coerce.boolean().default(false),
};

const env = createEnv({
  server: baseServerSchema,
  client: {},
  clientPrefix: "",
  runtimeEnv: process.env,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export default env;