import React from "react";

const PostNo = ({ setCounterPost }) => {
  return (
    <>
      <div>
        <button onClick={() => setCounterPost(1)}>See Post : 1</button>
        <button onClick={() => setCounterPost(2)}>See Post : 2</button>
        <button onClick={() => setCounterPost(3)}>See Post : 3</button>
        <button onClick={() => setCounterPost(4)}>See Post : 4</button>
        <button onClick={() => setCounterPost(5)}>See Post : 5</button>
      </div>
    </>
  );
};

export default PostNo;
