import React from "react";

const Card1 = () => {
  throw new Error("Something went wrong");

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          display: "inline-block",
          padding: "20px",
          border: "1px solid hray",
          borderRadius: "10px",
        }}
      >
        This is Card 1
      </div>
    </>
  );
};

export default Card1;
