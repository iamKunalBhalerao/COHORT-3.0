import React, { useEffect, useState } from "react";

const Notification = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    setCount2((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setInterval(increase, 1000);
    setInterval(decrease, 3000);
  }, []);

  useEffect(() => {
    console.log("useEffect runs after increase count : " + count);
    console.log("useEffect runs after decrease count : " + count2);
  }, [count, count2]);

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "100px",
        }}
      >
        <img
          style={{
            position: "relative",
          }}
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
          alt="notification"
          width={80}
        />
        <span
          style={{
            position: "absolute",
            padding: 8,
            borderRadius: "100px",
            backgroundColor: "crimson",
            color: "white",
          }}
        >
          [{count}]-[{count2}]
        </span>
      </div>
    </>
  );
};

export default Notification;
