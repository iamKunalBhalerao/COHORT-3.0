import React from "react";

const Post = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
          style={{
            borderRadius: "100px",
            width: "50px",
            height: "50px",
          }}
        />
        <input
          style={{
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "100px",
            paddingRight: "200px",
            paddingLeft: "20px",
          }}
          type="text"
          placeholder="Create Post"
        />
      </div>
    </>
  );
};

export default Post;
