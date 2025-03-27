import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          color: "black",
        }}
      >
        <Link style={{ color: "black", textDecoration: "none" }} to="">
          Home
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="blogs">
          Blogs
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="contact">
          Contact
        </Link>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="student/login"
        >
          Student Login
        </Link>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="teacher/login"
        >
          Teacher Login
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
