import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [tabData, setTabData] = useState({});
  const [loder, setLoder] = useState(true);

  const in_a_i_style = {
    fontSize: "25px",
    color: "#666666",
  };

  useEffect(() => {
    setLoder(false);
    console.log("send a backedn request to get the data for ", currentTab);
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + currentTab.length
    ).then(async (res) => {
      const jsondata = await res.json();
      setTabData(jsondata);
      setLoder(true);
    });
  }, [currentTab]);

  return (
    <>
      <nav
        className="navbar"
        style={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: "40px",
        }}
      >
        <div
          className="navleft"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh2DiY-UY_24sTF_1-yecTQI275oFKmBKxg&s"
            alt="LinkedIn"
            width="35px"
          />
          <input
            type="text"
            placeholder="Search Here"
            style={{
              color: "gray",
              padding: "10px",
              backgroundColor: "#F2F2F2",
              border: "none",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          className="navright"
          style={{ color: "black", display: "flex", gap: "15px" }}
        >
          <a
            style={{
              color: currentTab == "Home" ? "black" : "#666666",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            href="#"
            onClick={() => {
              setCurrentTab("Home");
            }}
          >
            <i style={in_a_i_style} className="ri-home-9-fill"></i>
            Home
          </a>
          <a
            style={{
              color: currentTab == "Network" ? "black" : "#666666",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => {
              setCurrentTab("Network");
            }}
            href="#"
          >
            <i style={in_a_i_style} className="ri-group-fill"></i>
            My Network
          </a>
          <a
            style={{
              color: currentTab == "Job" ? "black" : "#666666",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            href="#"
            onClick={() => {
              setCurrentTab("Job");
            }}
          >
            <i style={in_a_i_style} className="ri-briefcase-4-fill"></i>
            Job
          </a>
          <a
            style={{
              color: currentTab == "Messageing" ? "black" : "#666666",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            href="#"
            onClick={() => {
              setCurrentTab("Messageing");
            }}
          >
            <i style={in_a_i_style} className="ri-chat-unread-fill"></i>
            Messageing
          </a>
          <a
            style={{
              color: currentTab == "Notification" ? "black" : "#666666",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            href="#"
            onClick={() => {
              setCurrentTab("Notification");
            }}
          >
            <i style={in_a_i_style} className="ri-notification-3-fill"></i>
            Notification
          </a>
        </div>
      </nav>

      <div
        className="TabData"
        style={{
          backgroundColor: "white",
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "60px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h1>{loder == false ? "Loding..." : tabData.title}</h1>
        <p>{loder == false ? "Loding..." : tabData.body}</p>
      </div>
    </>
  );
};

export default Navbar;
