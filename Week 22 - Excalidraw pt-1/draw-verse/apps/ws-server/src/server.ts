import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    ws.send(`Your Message: ${message}`);
  });

  ws.on("close", () => {
    ws.send("Cliend Offline");
  });

  ws.on("error", (error) => {
    console.error(`Websocket Error: ${error}`);
  });
});
