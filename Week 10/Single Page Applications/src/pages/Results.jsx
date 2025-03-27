import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <>
      <div
        style={{
          background: `url("https://i.pinimg.com/1200x/48/eb/51/48eb513bbde5278ff5217e0ef0fc7bf2.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "100px", backgroundColor: "transparent" }}>
          This is Result Page
        </h1>
        <p
          style={{
            backgroundColor: "transparent",
            width: "60%",
            color: "gray",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
          praesentium voluptas molestiae ipsum corporis quae omnis veritatis
          voluptatum. Vel, aperiam.
        </p>
      </div>
    </>
  );
};

export default Results;
