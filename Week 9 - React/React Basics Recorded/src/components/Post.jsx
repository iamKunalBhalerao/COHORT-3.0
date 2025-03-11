const Post = () => {
  const divStyle = {
    width: 200,
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    color: "black",
    borderRadius: "5px",
    marginBottom: 2,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  return (
    <div style={divStyle}>
      <div
        className="postTitle"
        style={{
          display: "flex",
          marginLeft: 7,
        }}
      >
        <img
          src={
            "https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg"
          }
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            marginRight: 5,
          }}
        />
        <div style={{ fontSize: 6, lineHeight: 0.2 }}>
          <p>
            <b>100xDevs</b>
          </p>
          <p style={{ color: "gray" }}>33,844 followers</p>
          <p style={{ color: "gray" }}>3d.</p>
        </div>
      </div>
      {/* Post Body */}
      <div className="postBody" style={{ fontSize: 7, padding: 7 }}>
        <p style={{ lineHeight: 2, fontSize: 7, fontWeight: 400 }}>
          🎙️
          <a href="#" style={{ textDecoration: "none", color: "blue" }}>
            100xDevs
          </a>{" "}
          Success Stories 🥳 <br /> Remore offer after 600 rejections
        </p>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
