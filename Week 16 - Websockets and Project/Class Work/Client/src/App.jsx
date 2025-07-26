import { useEffect, useRef, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const inputRef = useRef(null);

  const sendMessage = () => {
    if (!socket) {
      return;
    }
    const inputMessage = inputRef.current.value;
    socket.send(inputMessage);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <>
      <div id="main">
        <input
          type="text"
          ref={inputRef}
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
