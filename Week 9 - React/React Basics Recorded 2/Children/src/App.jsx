import React from "react";
import Children from "./components/Children";
import Profile from "./components/Profile";
import Post from "./components/Post";
// import Trending from "./components/Trending";

const App = () => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Children children={<Profile />} />
        <Children children={<Post />} />
        {/* <Children children={<Trending />} /> */}
        {/* This works same as the Children Attribute */}
        <Children>
          <h1>Trending Now</h1>
          <p style={{ color: "gray" }}>curated by LinkedIn News</p>
          <p style={{ color: "black" }}>BSE tops global markets in March</p>
        </Children>
      </div>
    </>
  );
};

export default App;
