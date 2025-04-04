import React from "react";

const Body = ({ children }) => {
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
      <div style={divStyle}>{children}</div>
    </>
  );
};

export default Body;
