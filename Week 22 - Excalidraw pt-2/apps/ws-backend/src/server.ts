import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import env from "@repo/env/index";
import { UserPayload } from "./types";
const JWT_SECRET = env.JWT_SECRET;

const wss = new WebSocketServer({ port: 8080 });

interface Users {
  ws: WebSocket;
  rooms?: string[];
  userId: string;
}

const users: Users[] = [];

const isUserAuth = (token: string): string | null => {
  const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;

  if (!decoded || typeof decoded == "string" || !decoded.id) {
    return null;
  }

  return decoded?.id;
};

wss.on("connection", async (ws, request) => {
  try {
    const url = request.url;

    if (!url) {
      return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";

    const isAuth = await isUserAuth(token);

    if (isAuth == null) {
      ws.close();
      return;
    }

    users.push({
      ws: ws,
      rooms: [],
      userId: isAuth,
    });

    ws.on("message", (data) => {
      const parsedData = JSON.parse(data as unknown as string);

      if (parsedData.type === "join_room") {
        const user = users.find((user) => user.ws === ws);
        if (!user || !user.rooms) return;
        user.rooms.push(parsedData.roomId);
        ws.send("You Joined the room");
      }

      if (parsedData.type === "leave_room") {
        const user = users.find((user) => user.ws === ws);
        if (!user || !user.rooms) return;
        user.rooms = user.rooms.filter((x) => x !== parsedData.roomId);
        ws.send(`You Leaved the Room: ${parsedData.roomId}`);
      }

      if (parsedData.type === "chat") {
        const roomId = parsedData.roomId;
        const message = parsedData.message;

        users.forEach((user) => {
          if (!user.rooms) return;
          if (user.rooms.includes(roomId)) {
            user.ws.send(
              JSON.stringify({
                type: "chat",
                message: message,
                roomId,
              })
            );
          }
        });
      }
    });
  } catch (error: any) {
    console.log(error);
    ws.close();
  }
});
