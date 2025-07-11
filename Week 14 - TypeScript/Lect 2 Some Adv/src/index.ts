/*
interface Address {
    city?: string; // Make any type, key, field otpional uisng "?"
    state: string;
    country: string;
  };

interface User {
  name: string;
  age: 21;
  address?: Address // Can set Interface as a interface
}

interface Office {
  address: Address
}

let user: User = {
  name: "Kunal",
  age: 21,
  address: {
    city: "Rahuri",
    state: "Maharashtra",
    country: "India",
  },
};

let user2: User = {
  name: "Kunal",
  age: 21,
};

function userData(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

let ans = userData(user);
if (ans) {
  console.log("I am Leagle to Drink.");
} else {
  console.log("I am Illigle to Drink.");
}
*/

// Function inside Interface and their type
/*
interface Person {
  name: string;
  age: number;
  greet: () => string;
  num: () => number;
}

const person: Person = {
  name: "Kunal",
  age: 21,
  greet() {
    return `Hello my name is ${this.name}, I am ${this.age} years old.`;
  },
  num() {
    return this.age;
  },
};
console.log(person.greet());
*/

// How ot use class in Interface
/*
interface Person {
  name: string;
  age: number;
  greet(name: string): string;
}

class Manager implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string) {
    return `Your name is ${name}`;
  }
}

let obj = new Manager("Kunal", 21);
let greet = obj.greet("Kunal");
console.log(greet)
*/

// Types in TS
/*
type Employee = {
  name: string;
  age: number;
};

type Manager = {
  name: string;
  role: string;
};

type Company = Employee & Manager;

let e: Employee = {
    name: "Kunal",
    age: 21
}

let m: Manager = {
    name: "Bhalerao",
    role: "SDE2"
}

let c: Company = {
    name: "Tata Consaltancy Services PVT",
    age: 22,
    role: "TCS"
}
*/

// union in Types
/*
type GoodUser = {
  name: string;
  age: number;
};

type BadUser = {
  name: string;
  id: number;
};

type User = GoodUser | BadUser;

let user: User = {
  name: "Kunal",
  age: 21,
  id: 1,
};
*/

// Intersection in Types
/*
type GoodUser = {
  name: string;
  age: number;
};

type BadUser = {
  name: string;
  id: number;
};

type User = GoodUser & BadUser;

let user: User = {
  name: "Kunal",
  age: 21,
  id: 1,
};
*/

/*
interface User {
  name: string;
  div: string;
};

interface Admin {
    name: string;
    id: number
}

type Classroom = User | Admin;

function greet(user: Classroom) {
    return `Welcome ${user.name}`
}

let user: User = {
    name: "User",
    div: "A"
}

let admin: Admin = {
    name: "Admin",
    id: 1
}

console.log(greet(user));
console.log(greet(admin));
*/

// Arrays in TypeScript

interface User {
  name: string;
  age: number;
}

let user1: User = {
  name: "Kunal",
  age: 21,
};

let user2: User = {
  name: "Prem",
  age: 12,
};

let user3: User = {
  name: "Omkar",
  age: 18,
};

function isLeagle(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

let ans = isLeagle([user1, user2, user3]);
// console.log(ans);

function usersName(user: string[]) {
  return user;
}

const ans2 = usersName(["Kunal", "Prem", "Tejas", "Omkar"]);
console.log(ans2);
