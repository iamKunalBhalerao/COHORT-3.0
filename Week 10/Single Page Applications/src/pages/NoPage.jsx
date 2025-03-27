import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }
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
        <h1
          style={{
            fontSize: "150px",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
          404 Page Not Found
        </h1>
        <p
          style={{
            backgroundColor: "transparent",
            width: "60%",
            color: "gray",
            textAlign: "center",
          }}
        ></p>
        <button
          style={{
            fontSize: "20px",
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#143D60",
            border: "none",
            borderRadius: "20px",
            color: "white",
            cursor: "pointer",
            fontWeight: 500,
          }}
          onClick={redirectUser}
        >
          Go Home{" "}
          <i
            className="ri-arrow-right-up-line"
            style={{ backgroundColor: "transparent", color: "white" }}
          ></i>
        </button>
      </div>
    </>
  );
};

export default NoPage;
