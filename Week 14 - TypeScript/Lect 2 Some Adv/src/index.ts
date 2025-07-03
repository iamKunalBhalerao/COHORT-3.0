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
