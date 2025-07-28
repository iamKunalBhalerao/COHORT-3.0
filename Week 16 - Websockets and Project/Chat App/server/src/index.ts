import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.rooomId,
      });
    }

    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find((x) => x.socket == socket);

      // // OR
      // let currentUserRoom = null;
      // for (let i = 0; i < allSockets.length; i++) {
      //   if (allSockets[i].socket == socket) {
      //     currentUserRoom = allSockets[i].room;
      //   }
      // }

      for (let i = 0; i < allSockets.length; i++) {
        if (
          allSockets[i].room == currentUserRoom?.room &&
          allSockets[i].socket !== socket
        ) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
});
