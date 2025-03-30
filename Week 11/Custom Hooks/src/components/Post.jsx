import React from "react";
import { useFetch } from "../Hooks/useFetch";

const Post = ({ CounterPost }) => {
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + CounterPost
  );

  return (
    <>
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
          Post {finalData.id}
        </legend>
        <h1>{finalData.id}</h1>
        <h3>{finalData.title}</h3>
        <p>{finalData.body}</p>
      </fieldset>
    </>
  );
};

export default Post;
