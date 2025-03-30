import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [post, setPost] = useState({});
  const [error, setError] = useState(true);

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    try {
      getPosts();
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }, []);

  return { post, error };
};

export default useFetch;
