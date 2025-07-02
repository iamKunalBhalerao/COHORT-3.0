// Problem 1 - Hello world
/*
function hello() {
    console.log("Hello World")
}

hello()
*/

// Problem 2 - Sum function
/*
function sum(a: number, b:number): number {
    return a + b;
}

let ans = sum(10, 20)
console.log(ans)
*/

// Problem 3 - Return true or false based on if a user is 18+
/*
function isLeagle(age: number) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let ans = isLeagle(22);
console.log(ans);
*/

// Create a function that takes another function as input, and runs it after 1 second.
/*
function callAnotherFn(fn: (name: string) => void) {
  setTimeout(fn, 1000);
}

function greet(name: string) {
  console.log("Hello ", +name);
}

callAnotherFn(greet);
*/

// TS Config Means
/*
const greet = (name) => console.log("Hello Wolrd")
greet("kunal")
*/

// Interfaces in TypeScript
/*
interface userType {
  name: string,
  age: number,
};

const user = {
  name: "Kunal",
  age: 21,
};

function greet(user: userType) {
  console.log(`Hello ${user.name}, You are age is ${user.age}`);
}

greet(user);
*/

// Types in TypeScript
/*
type sumInput = number


function sum(a: sumInput, b: sumInput){
  console.log(a + b)
}

sum(2, 4)*/

// interface Example

interface Employee {
  name: string;
  age: number;
}

interface Manager {
  name: string;
  department: string;
}

type company = Employee & Manager

let t: company = {
  name: "Kunal",
  age: 21,
  department: "IT",
}