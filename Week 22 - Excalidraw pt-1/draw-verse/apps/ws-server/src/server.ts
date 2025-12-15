import { env } from "@repo/env";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: env.WS_PORT });

wss.on("connection", function connection(ws, request) {

  const url = request.url

  if(!url) {
    return 
  }

  const queryParams = new URLSearchParams(url.split("?")[1])
  const token = queryParams.get("token")

  ws.on("message", (message) => {
    ws.send(`Your Message: ${message}`);
  });

});
