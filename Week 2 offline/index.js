const fs = require("fs");
function setTimeoutPromisified(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function readFilePromisified() {
  return new Promise((res, rej) => {
    fs.readFile("./a.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("file not found");
      } else {
        res(data);
      }
    });
  });
}

let ans = readFilePromisified();
ans
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
