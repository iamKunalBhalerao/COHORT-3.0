import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
// app.use(bodyParser());

// Route Imports
import userRouter from "./routes/user.routes.js";
import accountRouter from "./routes/account.routes.js";

// Route Defines
app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", accountRouter);

export default app;
