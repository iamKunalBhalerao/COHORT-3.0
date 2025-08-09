import express, { response } from "express";
import { Client } from "pg";
import cookieParser from "cookie-parser";

const app = express();

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_8owzAHEuR5dI@ep-divine-meadow-a1gwpc9q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

pgClient
  .connect()
  .then(() => console.log("Connected to PostgreSQL Successfully."))
  .catch((err) => {
    console.log("Failed to Connect PostgreSQL, Error : ", err);
    process.exit(1);
  });

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  const { username, email, password, city, country, street, pincode } =
    req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required !",
    });
  }

  if (!city || !country || !street || !pincode) {
    return res.status(400).json({
      message: "City, Country, Street and Pincode are required !",
    });
  }

  const findUserQuery = `SELECT * FROM users WHERE email=$1`;
  const existingUser = await pgClient.query(findUserQuery, [email]);

  if (existingUser.rows.length > 0) {
    return res.status(400).json({
      message: "User with this email is alredy exists!",
    });
  }

  // PostgreSQL Query to create a Foreign key relationships
  /*
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(55) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    pincode VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("user_id") REFERENCES users(id) ON DELETE CASCADE
  )
*/

  await pgClient.query(`BEGIN;`); // Begin of transaction

  const insertUserQuery = `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *`;
  const insertAddressQuery = `INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5) RETURNING *`;

  const userValues = [username, email, password];
  const userResponse = await pgClient.query(insertUserQuery, userValues);

  const user_id = userResponse.rows[0].id;
  if (!user_id) {
    return res.status(404).json({
      success: false,
      message: "User ID not found!",
    });
  }
  const addressValues = [user_id, city, country, street, pincode];
  const addressResponse = await pgClient.query(
    insertAddressQuery,
    addressValues
  );

  await pgClient.query(`COMMIT;`); // End of transaction

  res
    .status(200)
    .cookie("id", userResponse.rows[0].id, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message: "You are Signed Up.",
      data: {
        ...userResponse.rows[0],
        address: { ...addressResponse.rows[0] },
      },
    });
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  // const query1 = `SELECT id,username,email,created_at FROM users WHERE id=$1`;
  // const res1 = await pgClient.query(query1, [id]);

  // const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  // const res2 = await pgClient.query(query2, [id]);

  // Joins in PostgreSQL
  // const joinQuery = `
  // SELECT users.id, users.username, users.email, users.created_at, addresses.city, addresses.country, addresses.street, addresses.pincode, addresses.created_at
  // FROM users
  // JOIN addresses ON users.id = addresses.user_id
  // WHERE users.id=$1
  // `;

  // const response = await pgClient.query(joinQuery, [id]);

  // Types of JOIN - 1. INNER JOIN - Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned
  
  // const joinQuery = `
  // SELECT users.id, users.username, users.email, users.created_at, addresses.city, addresses.country, addresses.street, addresses.pincode, addresses.created_at
  // FROM users 
  // INNER JOIN addresses ON users.id = addresses.user_id
  // WHERE users.id=$1 
  // `;

  // const response = await pgClient.query(joinQuery, [id]);

  // // Types of JOIN - 2. LEFT join - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

  // const joinQuery = `
  // SELECT users.id, users.username, users.email, users.created_at, addresses.city, addresses.country, addresses.street, addresses.pincode, addresses.created_at
  // FROM users 
  // LEFT JOIN addresses ON users.id = addresses.user_id
  // WHERE users.id=$1 
  // `;

  // const response = await pgClient.query(joinQuery, [id]);


  // Types of JOIN - 3. RIGHT join -  Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.
  // const joinQuery = `
  // SELECT users.id, users.username, users.email, users.created_at, addresses.city, addresses.country, addresses.street, addresses.pincode, addresses.created_at
  // FROM users 
  // RIGHT JOIN addresses ON users.id = addresses.user_id
  // WHERE users.id=$1 
  // `;

  // const response = await pgClient.query(joinQuery, [id]);

  // Types of JOIN - 4. FULL Join -  A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.
  const joinQuery = `
  SELECT users.id, users.username, users.email, users.created_at, addresses.city, addresses.country, addresses.street, addresses.pincode, addresses.created_at
  FROM users 
  FULL JOIN addresses ON users.id = addresses.user_id
  WHERE users.id=$1 
  `;

  const response = await pgClient.query(joinQuery, [id]);

  res.status(200).json({
    data: response.rows[0],
  });
});

app.post("/create-todo", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "All Fields are Required!",
    });
  }
  const user_id = req.cookies?.id;

  console.log(user_id);

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "You are not Signed In, Please Sign Up, It's Free.",
    });
  }

  const insertTodoQuery = `INSERT INTO todos(user_id, title, description) VALUES($1, $2, $3)`;
  const todoValues = [user_id, title, description];
  const response = await pgClient.query(insertTodoQuery, todoValues);

  const searchTodosQuery = `SELECT * FROM todos WHERE user_id=$1`;
  const { rows } = await pgClient.query(searchTodosQuery, [user_id]);

  res.status(200).json({
    success: true,
    message: "Todo Created SuccessFully",
    data: rows,
  });
});

app.listen(3000, () => console.log("Server is runnung..."));
