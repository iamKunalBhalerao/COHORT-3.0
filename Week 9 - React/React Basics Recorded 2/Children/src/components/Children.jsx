import React from "react";

const Children = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Children;
