import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "fixed",
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
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
              //   color: "black",
            }}
            to=""
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="courses"
          >
            Courses
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="test-series"
          >
            Test Series
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="scholorships"
          >
            Scholorships
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="results"
          >
            Results
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="study-material"
          >
            Study Materials
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="about"
          >
            About Us
          </Link>
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
            }}
            to="contact"
          >
            Contact Us
          </Link>
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
            className="ri-phone-fill"
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
    </>
  );
};

export default Navbar;
