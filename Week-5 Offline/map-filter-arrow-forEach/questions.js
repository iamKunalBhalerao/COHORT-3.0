// Q1. Merging tow arrays of data fetched from saperator APIs into a single list.

const names = ["Alice", "Bob", "Charlie", "Diana"];
const lastnames = ["shah", "bhalerao", "sharma", "singh"];

const fullname = [...names, ...lastnames];

// Q2. Filtering an array of objects to display items based on a search query (eg. filtyerfiltering products by type)

const products = [
  { name: "Laptop", type: "electronics" },
  { name: "T-shirt", type: "clothing" },
  { name: "Mobile", type: "electronics" },
  { name: "Jeans", type: "clothing" },
];

const productType = products.filter((product) => {
  return product.type === "electronics";
});

// Q3. Mapping over an array of user data to create a list of user cards.

/*
const users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 25 },
  { name: "Diana", age: 30 },
];

const usercard = users.map((user) => {
    return `<div><h1>${user.name}</h1><h3>${user.age}</h3></div>`;
});
*/

// document.getElementById("cards").innerHTML = usercard;

// Grouping an array of objects by a specific property.(e.g.: grouping user by role)

/*
const roles = [
  { name: "Alice", age: 28, role: "admin" },
  { name: "Bob", age: 34, role: "user" },
  { name: "Charlie", age: 25, role: "admin" },
  { name: "Diana", age: 30, role: "user" },
];

let obj = {};

roles.forEach((user) => {
  if (obj[user.role]) {
    obj[user.role].push(user);
  } else {
    obj[user.role] = [];
    obj[user.role].push(user);
  }
});

console.log(obj);
*/

// Removing or Updating a specific object in an array of data based on a uniqe ID.

const people = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Diana", age: 30 },
];

let newarr = people.filter((user) => {
  return user.id != 2;
});
