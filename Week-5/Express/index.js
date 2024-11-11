// const axios = require("axios");

// async function getRecentPost() {
//   console.log("before swending request");
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await res.json();
//   console.log(data);
//   console.log("request ha been processed!");
//   document.getElementById("post").innerHTML = data.title;
// }

// under the hood its converted into this :
// async function getRecentPost() {
//   console.log("before sending request");

//   await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
//     res.json().then((data) => {
//       console.log(data);
//       console.log("request has been processed");
//       document.getElementById("post").innerHTML = data.body;
//     });
//   });
// }

async function getRecentPost() {
  console.log("before sending request");
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  document.getElementById("post").innerHTML = res.data.body;
}

getRecentPost();
