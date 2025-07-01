"use strict";
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
var greet = function () {
  return console.log("Hello Wolrd");
};
greet();
