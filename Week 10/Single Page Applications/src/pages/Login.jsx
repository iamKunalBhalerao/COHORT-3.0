import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
          position: "relative",
          height: "100vh",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "30px",
            width: "75%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <img
            src="https://i.pinimg.com/1200x/3b/89/33/3b8933d2a20003f5ccb58a6ace77c860.jpg"
            alt="LoginImg"
            style={{ width: "50%", borderRadius: "20px" }}
          />

          <form
            action={redirectUser}
            style={{
              width: "50%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                backgroundColor: "white",
                paddingBottom: "50px",
              }}
            >
              Login
            </h1>
            <p
              style={{
                width: "45%",
                backgroundColor: "transparent",
                textAlign: "left",
                color: "gray",
              }}
            >
              Email:{" "}
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              style={{
                backgroundColor: "white",
                padding: "1vw 8vw 1vw 1vw",
                border: "1px solid #E4EFE7",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              required
            />
            <p
              style={{
                width: "45%",
                backgroundColor: "transparent",
                textAlign: "left",
                color: "gray",
              }}
            >
              Password:{" "}
            </p>
            <input
              type="password"
              name="email"
              id="email"
              placeholder="Enter Your Password"
              style={{
                backgroundColor: "white",
                padding: "1vw 8vw 1vw 1vw",
                border: "1px solid #E4EFE7",
                borderRadius: "10px",
              }}
              required
            />

            <button
              style={{
                width: "45%",
                padding: "1vw",
                backgroundColor: "#0646F8",
                color: "white",
                fontSize: "20px",
                fontWeight: 500,
                borderRadius: "10px",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
