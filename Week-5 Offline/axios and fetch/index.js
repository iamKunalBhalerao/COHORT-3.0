// Axios vs Fetch
const axios = require("axios");

async function main() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
  });
  const json = await response.json();
  console.log(json.length);
}

async function main() {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/todos`
  );
  console.log(response.data.length);
}

main();
