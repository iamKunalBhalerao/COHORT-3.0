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

// Custom Hook useFetch
export const useFetch = (url, retryTime) => {
  const [finalData, setFinalData] = useState({});
  const [Loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  useEffect(() => {
    const clock = setInterval(getDetails, retryTime * 1000);
    return () => clearInterval(clock);
  }, []);

  return { finalData, Loading };
};
