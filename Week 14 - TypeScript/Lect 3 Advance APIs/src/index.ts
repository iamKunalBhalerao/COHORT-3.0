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