import React, { useEffect, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!socket) {
      return;
    }
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <>
      <div id="main">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Message"
          id="message"
        />
        <button onClick={sendMessage} id="btn">
          Send
        </button>
      </div>
    </>
  );
};

export default App;
