import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const navigateTab = (route) => {
    setCurrentTab(route);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "white",
          padding: "0 1rem",
        }}
      >
        <div
          className="links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "white",
            color: "#C7D9DD",
            padding: "10px",
          }}
        >
          <h1
            style={{
              color: "#27548A",
              fontSize: "40px",
              fontWeight: 900,
              backgroundColor: "white",
            }}
          >
            Allen
          </h1>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
              //   color: "black",
            }}
            onClick={() => navigateTab("home")}
          >
            Home
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            onClick={() => navigateTab("about")}
          >
            About
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            onClick={() => navigateTab("contact")}
          >
            Contact Us
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            href="#"
          >
            Scholorships
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            href="#"
          >
            Results
            <span
              style={{
                backgroundColor: "#FE4F2D",
                color: "white",
                fontSize: "10px",
                borderRadius: "10px",
              }}
            >
              new
            </span>
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            href="#"
          >
            Study Materials
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            href="#"
          >
            About Us
          </a>
        </div>
        <div
          className="login"
          style={{
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            backgroundColor: "white",
          }}
        >
          <i
            class="ri-phone-fill"
            style={{
              backgroundColor: "#4D55CC",
              color: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          ></i>
          <a
            href="#"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              padding: "10px 20px",
              backgroundColor: "white",
              border: "1px solid #4D55CC",
              borderRadius: "20px",
            }}
          >
            Log In
          </a>
        </div>
      </nav>
      <div>
        {currentTab === "home" && <Home />}
        {currentTab === "about" && <About />}
        {currentTab === "contact" && <Contact />}
      </div>
    </>
  );
};

export default Navbar;
