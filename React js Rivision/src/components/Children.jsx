import React from "react";
import Button from "../ui/Button";
import Clock from "./Clock";

const Children = ({
  setNotificationCount,
  setNetwork,
  setJobs,
  setMessaging,
}) => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    height: "calc(100vh - 70px)",
    width: "100%",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <>
      <div style={divStyle}>
        <Clock />
        <Button
          setNotificationCount={setNotificationCount}
          setNetwork={setNetwork}
          setJobs={setJobs}
          setMessaging={setMessaging}
        />
      </div>
    </>
  );
};

export default Children;
