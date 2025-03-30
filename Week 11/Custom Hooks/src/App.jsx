import React from "react";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { post, error } = useFetch();
  return (
    <>
      {error ? (
        <h1>Loading ...</h1>
      ) : (
        <fieldset
          style={{
            width: "50%",
            padding: "1rem",
            display: "inline-grid",
            gap: "30px",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        >
          <legend style={{ marginLeft: "10px", color: "gray" }}>
            Post {post.id}
          </legend>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </fieldset>
      )}
    </>
  );
};

export default App;
