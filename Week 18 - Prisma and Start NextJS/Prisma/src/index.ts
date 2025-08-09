import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, age } = req.body;

    if (!username || !email || !password || !age) {
      return res.status(200).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const response = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password: password,
        age: age,
      },
    });

    res.status(200).json({
      success: true,
      message: response,
    });

    //
    //
    //
    //
    //
  } catch (err) {
    console.log(err);
  }
});

app.post("/deleteuser", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(200).json({
        success: false,
        message: "Email is required!",
      });
    }

    const response = await prisma.users.delete({
      where: {
        email: email,
      },
    });

    res.status(200).json({
      success: true,
      message: response,
    });

    //
    //
    //
    //
    //
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "something went wrong!",
      Error: err,
    });
  }
});

app.post("/updateuser", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const response = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        username: username,
        password: password,
      },
    });

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      response,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "something went wrong!",
      Error: err,
    });
  }
});

app.get("/details", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(200).json({
        success: false,
        message: "Email is required!",
      });
    }

    const response = await prisma.users.findFirst({
      where: {
        email: email,
      },
      select: {
        username: true,
        email: true,
        age: true,
      },
    });

    res.status(200).json({
      success: true,
      message: response ? response : "No User Found!",
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log(`server is running...`);
});
