"use client";

import { useEffect, useRef, useState } from "react";
import { useSocket } from "../app/hooks/useSocket";

export default function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const { socket, loading } = useSocket();
  const [chats, setChats] = useState(messages);
  const [currentMessage, setCurrentMessage] = useState("");
  const hasJoined = useRef(false);

  useEffect(() => {
    if (socket && !loading) {
      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat") {
          setChats((c) => [...c, { message: parsedData.message }]);
        }
      };

      socket.onerror = (error) => {
        console.log(`Websocket Error: ${error}`);
      };

      socket.onclose = (event) => {
        console.log("Websoket closed: ", event.code, event.reason);
        hasJoined.current = false;
      };

      if (!hasJoined.current && socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: "join_room",
            roomId: id,
          })
        );

        hasJoined.current = true;
        console.log("Joined Room: ", id);
      }
    }
  }, [socket, loading, id]);

  return (
    <>
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        boxSizing: "border-box",
        gap: "5px"
      }}>

        <div style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "4px"
        }}>
          {chats.map((chat, index) => {
            return <div style={{padding: "6px", borderRadius: "10px 10px 0 10px", backgroundColor: "#9290C3"}} key={index}>{chat.message}</div>;
          })}
        </div>

        <div style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          gap: "4px",
        }}>
          <input
          style={{
            width: "100%",
            backgroundColor: "#535C91",
            border: "none",
            fontSize: "20px",
            color: "white",
            borderRadius: "10px",
            outline: "none",
            padding: "20px"
          }}
            type="text"
            placeholder="Send Message"
            value={currentMessage}
            onChange={(e: any) => {
              setCurrentMessage(e.target.value);
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (socket?.readyState === WebSocket.OPEN && hasJoined.current) {
                socket?.send(
                  JSON.stringify({
                    type: "chat",
                    roomId: id,
                    message: currentMessage,
                  })
                );
                setCurrentMessage("");
              } else {
                console.log("Not connected or not joined the room!");
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
