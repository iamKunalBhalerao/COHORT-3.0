import { env } from "@repo/env";
import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";

const wss = new WebSocketServer({ port: env.WS_PORT });

console.log("WS-Server is Started") 

wss.on("connection", function connection(ws, request) {
  try {
  const url = request.url;

  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const decoded = jwt.verify(token, env.JWT_SECRET);

  if (!decoded || !(decoded as JwtPayload).email) {
    ws.close();
    return;
  }

  ws.on("message", (message) => {
    ws.send(`Your Message: ${message}`);
  });

  } catch (error: any) {
    ws.close()  
    console.log(error)
  }
});
