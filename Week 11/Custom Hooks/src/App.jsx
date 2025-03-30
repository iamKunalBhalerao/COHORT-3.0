import React, { useState } from "react";
import Post from "./components/Post";
import PostNo from "./components/PostNo";

const App = () => {
  const [CounterPost, setCounterPost] = useState(1);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Post CounterPost={CounterPost} />
        <PostNo setCounterPost={setCounterPost} />
      </div>
    </>
  );
};

export default App;
