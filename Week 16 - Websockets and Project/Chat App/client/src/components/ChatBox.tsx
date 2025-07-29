import { useEffect, useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { TbSendOff } from "react-icons/tb";

const ChatBox = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [myMessage, setMyMessage] = useState("");

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message: myMessage,
          },
        })
      );
      setMyMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "Kunal's",
          },
        })
      );
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current = ws;

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <>
      <div className="p-2 md:px-1 md:py-1 w-full md:w-2/4 h-full md:h-5/6 bg-slate-600 rounded-lg border-1 border-slate-200">
        <div className="w-full h-full flex flex-col bg-slate-800 rounded-lg">
          <div className="flex-1 flex flex-col overflow-y-auto gap-2 h-full p-2 transition-all duration-300 ease-in-out custom-scrollbar">
            {messages.map((value: string, index) => (
              <p
                key={index}
                className={`px-2 py-1 rounded-lg ${
                  value.startsWith("You Send")
                    ? "bg-green-600 self-end"
                    : "bg-slate-600 self-start"
                } text-white`}
              >
                {value.startsWith("You Send")
                  ? value.replace("You Send :", "")
                  : value}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="w-full flex gap-1 bg-slate-950 rounded-b-lg p-1">
            <input
              onChange={(e) => setMyMessage(e.target.value)}
              type="text"
              value={myMessage}
              onKeyDown={handleKeyPress}
              className="w-full rounded-md bg-slate-900 outline-0 active:outline-0 px-2 text-white text-xl"
            />
            {myMessage !== "" ? (
              <button
                onClick={sendMessage}
                className="p-2 text-white bg-slate-900 rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out"
              >
                <LuSend />
              </button>
            ) : (
              <button className="p-2 text-white bg-slate-900 rounded-lg cursor-pointer hover:bg-red-800 transition-all duration-300 ease-in-out">
                <TbSendOff />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
