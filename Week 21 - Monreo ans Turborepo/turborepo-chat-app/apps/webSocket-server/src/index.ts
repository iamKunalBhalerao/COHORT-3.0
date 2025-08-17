import { WebSocketServer } from "ws";

const ws = new WebSocketServer();

ws.on("connection", (socket) => {
  socket.send("This is websocket server");
});
