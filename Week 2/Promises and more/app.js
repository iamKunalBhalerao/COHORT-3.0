const fs = require("fs");

function readFile() {
  return new Promise((res, rej) => {
    fs.readFile("./a.txt", "utf-8", (err, data) => {
      res(data);
    });
  });
}

const p = readFile();

p.then((contents) => [console.log(contents)]);
