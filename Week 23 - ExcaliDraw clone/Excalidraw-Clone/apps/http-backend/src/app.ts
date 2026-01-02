import express, { Request, Response, type Express } from "express";
import userRouter from "./routes/user.routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    credentials: true,
  })
);

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Chat App!");
});

app.use("/api/v1/user", userRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.send("Everything is Okay.");
});

export default app;
