"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Canvas from "./Canvas";

export default function RoomCanvas({
  roomId,
  userToken,
}: {
  roomId: string;
  userToken: string;
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080?token=${userToken}`);

    ws.onopen = () => {
      setSocket(ws);

      ws.send(JSON.stringify({
        type: "join_room",
        roomId: roomId
      }))

    };
  }, [userToken]);

  if (!socket) {
    
    return (
      <>
        <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-gray-50">
          <Loader />
          <p className="text-xl font-medium text-gray-800 animate-pulse">
            Connecting to server...
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Canvas roomId={roomId} socket={socket} />
    </>
  );
}
