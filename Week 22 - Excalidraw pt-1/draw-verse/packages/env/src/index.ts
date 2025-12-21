import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import path from "path";
import z from "zod";

config({ path: path.join(__dirname, "../.env") });

export const baseServerSchema = {
  // Environment
  NODE_ENV: z.string(),
  HTTP_PORT: z.coerce.number().positive().default(3001),
  WS_PORT: z.coerce.number().positive().default(8080),
  // Database
  DATABASE_URL: z.url(),
  // JWT SECRETS
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
};

export const env = createEnv({
  server: baseServerSchema,
  client: {},
  clientPrefix: "",
  runtimeEnv: process.env,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export type Env = typeof env;
