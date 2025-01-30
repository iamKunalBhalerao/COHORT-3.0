const express = require("express");
const app = express();

app.use(express.json());
var users = [
  {
    name: "Kunal",
    kidneys: [
      {
        healthy: false,
      },
      //   {
      //     healthy: true,
      //   },
    ],
  },
];

app.get("/", (req, res) => {
  // User can check how many kidneys they have and their health
  const userkidney = users[0].kidneys;
  const numberofkidneys = userkidney.length;
  let numberofhealthykidneys = 0;
  for (let i = 0; i < numberofkidneys; i++) {
    if (userkidney[i].healthy) {
      numberofhealthykidneys = numberofhealthykidneys + 1;
    }
  }
  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});

app.post("/", (req, res) => {
  // User can add a new kidney
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  // User can replace a kidney, make it healthy
  const numberofkidneys = users[0].kidneys.length;
  for (let i = 0; i < numberofkidneys; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "kidneys is updated to healthy!",
  });
});

app.delete("/", (req, res) => {
  // user can remove a Unhealthy kidney
  const newkidneys = [];
  const numberofkidneys = users[0].kidneys.length;
  for (let i = 0; i < numberofkidneys; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newkidneys;
  res.json({
    msg: "Done",
  });
});

app.listen(3000);
console.log("server is on PORT:3000");
