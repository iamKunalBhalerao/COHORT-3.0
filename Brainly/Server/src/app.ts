import cors from "cors";
// import dotenv from "@dotenvx/dotenvx";
import express from "express";
import cookieParser from "cookie-parser";

// dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Route Imports
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import contentRouter from "./routes/content.routes";
import { errorHandler } from "./utils/errorHandler";

// Route Declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);

app.use(errorHandler);

export default app;
