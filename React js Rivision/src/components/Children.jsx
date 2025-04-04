import React from "react";
import Button from "../ui/Button";

const Children = ({
  setNotificationCount,
  setNetwork,
  setJobs,
  setMessaging,
}) => {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "30px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <>
      <div style={divStyle}>
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
