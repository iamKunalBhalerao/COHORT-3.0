import React, { useState } from "react";

const Notification = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const incrementNotification = () => {
    setNotificationCount(notificationCount + 1);
  };

  const btnstyle = {
    backgroundColor: "crimson",
    marginTop: "10px",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button style={btnstyle} onClick={incrementNotification}>
        send Message
      </button>
      <h1
        style={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 4,
          color: "black",
          display: "flex",
          alignItems: "flex-start",
          cursor: "pointer",
        }}
      >
        <i class="ri-notification-3-line"></i>
        <span
          style={{
            color: "white",
            fontSize: 14,
            backgroundColor: "crimson",
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 2,
            paddingRight: 3,
            borderRadius: 5,
          }}
        >
          {notificationCount}
        </span>
      </h1>
    </>
  );
};

export default Notification;
