const fs = require("fs");

fs.readFile("./a.txt", "utf8", (err, data) => {
  if (err) err;
  else console.log(data);
});
