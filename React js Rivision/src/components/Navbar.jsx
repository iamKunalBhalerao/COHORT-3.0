import React from "react";

const Navbar = ({ netWork, notificationCount, jobs, messaging }) => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          backgroundColor: "white",
          color: "#fff",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="logoAndSearch"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh2DiY-UY_24sTF_1-yecTQI275oFKmBKxg&s"
            alt="LinkedIn"
            width={40}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "300px",
              height: "40px",
              backgroundColor: "#F2F2F2",
              borderRadius: "10px",
              paddingLeft: "20px",
              border: "none",
              marginLeft: "20px",
            }}
          />
        </div>
        {/* Icons */}
        <div
          className="icons"
          style={{
            display: "flex",
            gap: "40px",
            padding: "10px 0",
          }}
        >
          <div
            className="Home"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="Notifications"
              width={33}
            />
            <span
              style={{
                backgroundColor: "crimson",
                padding: "3px 5px",
                position: "absolute",
                borderRadius: "15px",
                marginLeft: "-10px",
                fontSize: "12px",
              }}
            >
              <i className="ri-creative-commons-zero-line"></i>
            </span>
          </div>
          <div
            className="Network"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <i
              className="ri-group-fill"
              style={{ fontSize: "33px", color: "black" }}
            ></i>
            <span
              style={{
                backgroundColor: "crimson",
                padding: "3px 5px",
                position: "absolute",
                borderRadius: "15px",
                marginLeft: "-10px",
                fontSize: "12px",
              }}
            >
              {netWork}
            </span>
          </div>
          <div
            className="Jobs"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <i
              className="ri-briefcase-2-fill"
              style={{ color: "black", fontSize: "33px" }}
            ></i>
            <span
              style={{
                backgroundColor: "crimson",
                padding: "3px 5px",
                position: "absolute",
                borderRadius: "15px",
                marginLeft: "-10px",
                fontSize: "12px",
              }}
            >
              {jobs}
            </span>
          </div>
          <div
            className="Messaging"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <i
              className="ri-message-3-fill"
              style={{ color: "black", fontSize: "33px" }}
            ></i>
            <span
              style={{
                backgroundColor: "crimson",
                padding: "3px 5px",
                position: "absolute",
                borderRadius: "15px",
                marginLeft: "-10px",
                fontSize: "12px",
              }}
            >
              {messaging}
            </span>
          </div>
          <div
            className="Notifications"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_EXtATKPKHh9NQshUwkh-cm0WVBl5sI5dA&s"
              alt="Notifications"
              width={33}
            />
            <span
              style={{
                backgroundColor: "crimson",
                padding: "3px 5px",
                position: "absolute",
                borderRadius: "15px",
                marginLeft: "-10px",
                fontSize: "12px",
              }}
            >
              {notificationCount}
            </span>
          </div>
          {/* Extra */}
          <div
            className="extra"
            style={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 20px",
              borderLeft: "1px solid rgb(201, 201, 201)",
            }}
          >
            <i
              className="ri-layout-masonry-fill"
              style={{ fontSize: "23px" }}
            ></i>
            <p style={{ fontSize: "10px", color: "gray" }}>Buisness</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
