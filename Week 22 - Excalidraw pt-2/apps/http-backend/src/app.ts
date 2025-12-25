import express, { Request, Response, type Express } from "express";
import userRouter from "./routes/user.routes";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Chat App!");
});

app.use("/api/v1/user", userRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.send("Everything is Okay.");
});

export default app;
