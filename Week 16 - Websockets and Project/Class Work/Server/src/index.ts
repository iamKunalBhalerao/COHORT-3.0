import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("User Connected");
  setInterval(() => {
    socket.send("Current price of solana is : " + Math.random());
  }, 1000);

  socket.on("message", (e) => {
    console.log(e.toString());
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
