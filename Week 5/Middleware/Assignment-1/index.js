const express = require("express");
const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(
//     `Method : ${req.method} | and Timestamp : ${new Date()} | URL : ${
//       req.protocol
//     }://${req.method("host")}${req.originalUrl}`
//   );
//   next();
// });

app.get("/", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  res.send(`Ans is : ${a + b}`);
});

app.listen(3000);
