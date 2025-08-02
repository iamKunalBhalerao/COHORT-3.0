import cors from "cors";
// import dotenv from "@dotenvx/dotenvx";
import express from "express";
import cookieParser from "cookie-parser";

// dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(cors());
const whitelist = ["http://localhost:5173"]; // Add Your Hosted domsain name
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        console.log(`CORS Error: Origin ${origin} not allowed.`);
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());

// Route Imports
import { errorMiddleware } from "./middlewares/globalErrorHandler";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import contentRouter from "./routes/content.routes";
import brainRouter from "./routes/brain.routes";

// Route Declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", brainRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running perfectly!",
    timestamp: new Date().toISOString(),
  });
});

app.use(errorMiddleware);


export default app;
