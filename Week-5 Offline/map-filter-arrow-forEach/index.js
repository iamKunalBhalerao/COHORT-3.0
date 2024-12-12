/* 
forEach
map
filter
destructuring
spread and rest
*/

/*
// forEach
let names = ["John", "Jane", "Doe", "Alice", "Bob"];

names.forEach((value) => {
  if (value === "Jhone") {
  } else {
    console.log(value);
  }
});
*/

/*
// map
let names = ["John", "Jane", "Doe", "Alice", "Bob"];

let newarr = names.map((value) => {
  return value + " ji";
});
*/

/*
// filter
let names = [
  "John",
  "Jane",
  "Doe",
  "Alice",
  "Bob",
  "Andrew",
  "Benjamin",
  "Catherine",
  "David",
  "Eva",
];

let newarr = names.filter((value) => {
  return value.startsWith("J") ? true : false ;
});
*/

/*
// Destructuring

let user = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  roles: ["user", "admin"],
  phoneNumbers: [
    { type: "home", number: "555-1234" },
    { type: "work", number: "555-5678" },
  ],
  interests: ["reading", "hiking", "coding"],
  occupation: "Software Engineer",
  socialMedia: {
    twitter: "@johndoe",
    linkedin: "linkedin.com/in/johndoe",
  },
};

const { zip } = user.address;
console.log(zip);

const [first, second] = user.roles;
console.log(first, second);
*/

// spread operator

let newnames = ["Alice", "Bob", "Charlie", "David", "Eva"];
const newarr = [...names]; // spread operator

// Rest operator

const abcd = (...rest) => {
  // console.log(rest);
};

abcd(1, 2, 3, 4, 5, 6);
