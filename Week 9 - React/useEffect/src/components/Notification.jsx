import React, { useEffect, useState } from "react";

const Notification = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    setInterval(increase, 1000);
  }, []);

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
          {count}
        </span>
      </div>
    </>
  );
};

export default Notification;
