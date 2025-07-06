// Pick in TS
/*
interface User {
  name: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "password">;

function updateProps(user: UpdateProps) {
  return `Name: ${user.name}, Password: ${user.password}`;
}

let user1 = {
  name: "Kunal",
  email: "kunal@gmail.com",
  password: "123456",
};
let ans = updateProps(user1);
console.log(ans);
*/

// Partial in TS
/*
interface User {
  name: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "password">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateProps(user: UpdatePropsOptional) {
  return `Name: ${user.name}, Password: ${user.password}`;
}

let user1 = {
  name: "Kunal",
  email: "kunal@gmail.com",
//   password: "123456",
};

let ans = updateProps(user1);
console.log(ans);
*/

// ReadOnly API in TS
/*
type User = {
  readonly name: string;
  readonly age: number;
  email: string;
  password: string;
};

// type ReadOnlyUser = Readonly<User>;
// OR

const user1: Readonly<User> = {
  name: "Kunal",
  age: 20,
  email: "kunal@gmail.com",
  password: "kunal@1234",
};

// user1.email = "kunalbhalerao002@gmail.com"; // Cannot assign to 'email' because it is a read-only property.

console.log(user1);
*/

// Record ans Maps in TS
/*
type User = {
    id: string;
    name: string
}

type Users = {
    [key: string]: User
}

const user: Users = {
  "123": { id: "123", name: "Kunal" },
  "456": { id: "456", name: "Prem" },
};
*/
/*
type Users = Record<string, {age: number, name: string}>

const user: Users = {
  "kunal": {
    age: 21,
    name: "Kunal"
  },
  "Prem": {
    age: 21,
    name: "Kunal"
  },
};
*/

type User = {
  id: string;
  username: string;
};

// type Users = {
//   [key: number]: User;
// };

// type Users = Record<string, User>;

// const users: Users = {
//   1: {
//     id: "123",
//     username: "iamKunal",
//   },
//   2: {
//     id: "234",
//     username: "iamPrem",
//   },
// };

// Exclude in TS

// type checkInput = string | number | boolean

// type ExcludeInput = Exclude<checkInput, boolean>

// function inputAge(age: ExcludeInput) {
//   return age
// }

// let ans = inputAge(21)
// console.log(ans);

import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.get("/", (_, res) => {
  res.send("Hello Kunal Boss")
})

app.put("/user", (req: any, res: any) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
