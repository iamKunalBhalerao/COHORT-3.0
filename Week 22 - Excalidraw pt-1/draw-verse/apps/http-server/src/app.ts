import express, { Express, Request, Response } from "express";
import UserRouter from "./routes/user.routes";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Draw-Verse HTTP Backend.");
});

app.use("/api/v1/user", UserRouter);

export default app;
