import React from "react";

const Post = ({ name, subtitle, image, time, description }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "400px",
          margin: "16px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <h2 style={{ margin: "0 0 8px", fontSize: "1.5rem", color: "#333" }}>
            {name}
          </h2>
          <h4 style={{ margin: "0 0 8px", fontSize: "1rem", color: "#666" }}>
            {subtitle}
          </h4>
          <p style={{ margin: "0 0 8px", fontSize: "0.9rem", color: "#999" }}>
            {time}
          </p>
          <p style={{ margin: "0 0 12px", fontSize: "1rem", color: "#444" }}>
            {description}
          </p>
          <img
            src={image}
            alt="Post Thumbnail"
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "12px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
