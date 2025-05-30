import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
          Let's Learn in new Way
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
        <button
          style={{
            fontSize: "20px",
            marginTop: "20px",
            backgroundColor: "blue",
            border: "none",
          }}
        >
          <Link
            to="courses"
            style={{
              textDecoration: "none",
              padding: "20px",
              color: "white",
              fontWeight: "500",
              backgroundColor: "#27548A",
              borderRadius: "20px",
            }}
          >
            Get Started
            <i
              className="ri-arrow-right-up-line"
              style={{ backgroundColor: "transparent", color: "white" }}
            ></i>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
