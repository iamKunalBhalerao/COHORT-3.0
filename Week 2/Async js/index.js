/*Goal of todays class - 
I/O tasks
Callbacks
Functional arguments
Async vs Sync code
Event loops, callback queues, JS
*/

/*
// Find sum of two numbers

function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(sum);
*/

/*
// Find sum from 1 to a number

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans = sum(100);
console.log(ans);
*/

/*
// Synchronous code
// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
*/

/*
// I/O heavy operations
// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

// Examples of I/O Heavy Operations:
// Reading a file
// Starting a clock
// HTTP Requests

// Write the code to read a file synchronously

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");
console.log(contents3);

// Start all 3 tasks together, and wait for them to finish. 

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

 
*/

/*
// Functional arguments

// Write a calculator program that adds, subtracts, multiplies, divides two arguments.

// Approach #1
// Calling the respective function

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

console.log(sum(1, 2))

// Approach #2
// Passing in what needs to be done as an argument.

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))

*/

// setTimeout
// setTimeout is another asynchronous function that executes a certain code after some time

function timeout() {
  console.log("in timeout function");
}

console.log("hi");

setTimeout(timeout, 2000);

console.log("welcome to loupe");

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c++;
}

console.log("After Expensive task");
