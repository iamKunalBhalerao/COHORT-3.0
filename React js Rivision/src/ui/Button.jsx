import React from "react";

const Button = ({
  setNotificationCount,
  setNetwork,
  setJobs,
  setMessaging,
}) => {
  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const sendNotification = () => {
    setNotificationCount((prev) => prev + 1);
  };

  const sendNetwork = () => {
    setNetwork((prev) => prev + 1);
  };

  const sendJob = () => {
    setJobs((prev) => prev + 1);
  };

  const sendMessage = () => {
    setMessaging((prev) => prev + 1);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button style={btnStyle} onClick={sendNotification}>
          Send Notification
        </button>
        <button style={btnStyle} onClick={sendNetwork}>
          Send Network Opportunity
        </button>
        <button style={btnStyle} onClick={sendJob}>
          Send Jobs
        </button>
        <button style={btnStyle} onClick={sendMessage}>
          Send Messages
        </button>
      </div>
    </>
  );
};

export default Button;
