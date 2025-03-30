import React, { useEffect, useState } from "react";

export const usePostTitle = () => {
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

export const useFetch = (url) => {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, [url]);
  return { finalData };
};
