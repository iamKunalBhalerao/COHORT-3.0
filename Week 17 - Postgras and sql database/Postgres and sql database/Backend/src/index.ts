import express from "express";
import { Client } from "pg";

const app = express();

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_VIEX1dnOjJp4@ep-divine-meadow-a1gwpc9q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

pgClient
  .connect()
  .then(() => {
    console.log(`Connected to PostgreSQL`);
  })
  .catch((err) => {
    console.log(`Failed to Connect to PostgreSQL DB : `, err);
    process.exit(1);
  });

pgClient.on("error", (err) => {
  console.log(`PostgreSQL Client Error : `, err);
});

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    const findUser = await pgClient.query(
      `SELECT email FROM users WHERE email=$1`,
      [email]
    );

    console.log(findUser.rows);
    if (findUser.rows.length > 0) {
      return res.status(400).json({
        message: "User alredy exists with this email!",
      });
    }

    const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3)`;
    const values = [username, email, password];

    const response = await pgClient.query(insertQuery, values);

    if (!response) {
      res.status(400).json({
        message: "Not able to create user in DB",
      });
    }

    const userDetails = await pgClient.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    );

    res.status(200).json({
      message: "User Signed Up Successfully.",
      data: userDetails.rows,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Something went wrong while Signing Up User !",
      error: error.detail,
    });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // Add the zod validation logic here...

  if (!email || !password) {
    res.status(400).json({
      message: "All Fields are Required!",
    });
  }

  try {
    const searchQuery = `SELECT email FROM users WHERE email=$1`;

    const findUser = await pgClient.query(searchQuery, [email]);

    if (!findUser) {
      res.status(400).json({
        message: "User Not Found!",
      });
    }

    const userPasswordInDB = await pgClient.query(
      `SELECT password FROM users WHERE email=$1`,
      [email]
    );

    if (password !== userPasswordInDB.rows[0].password) {
      return res.status(400).json({
        message: "Invalid Password!",
      });
    }

    const userDetails = await pgClient.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    );

    res
      .status(200)
      .cookie("token", "Dummy Token for Now", {
        httpOnly: true,
        secure: true,
      })
      .json({
        message: "User Signed In Successfully.",
        data: userDetails.rows[0],
      });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong while signing in user!",
    });
  }
});

app.post("/logout", (req, res) => {
  res.status(200).clearCookie("token").json({
    message: "User Loged out Successfully",
  });
});

app.post("/update", async (req, res) => {
  const { email, password, newPassword } = req.body;

  if (!email || !password || !newPassword) {
    return res.status(400).json({
      message: "Password is Required!",
    });
  }

  try {
    const updateQuery = `UPDATE users SET password=$1 WHERE email=$2`;

    await pgClient.query(updateQuery, [newPassword, email]);

    const userDetails = await pgClient.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    );

    res.status(200).json({
      message: "Password is Changed Successfully",
      data: userDetails.rows[0],
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Something Went wrong while updating password",
      error: error.detail,
    });
  }
});

app.listen(3000, () => {
  console.log("connected to server...");
});
