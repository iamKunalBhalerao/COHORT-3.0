import React, { useState } from "react";
// import Toggle from "./components/Toggle";
// import Notification from "./components/Notification";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <Post
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Post 1",
        subtitle: "22,324 Followers",
        time: "1 hour ago",
        image:
          "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
        description:
          "This is a simple post description. It gives a brief overview of the content.",
      },
    ]);
  }

  return (
    <>
      <div>
        <button
          style={{
            backgroundColor: "crimson",
            padding: 6,
            fontSize: 24,
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={addPost}
        >
          Add Post
        </button>
        <div
          style={{
            height: "screen",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Toggle />
        <Notification /> */}

          <div>
            <div>{postComponents}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
