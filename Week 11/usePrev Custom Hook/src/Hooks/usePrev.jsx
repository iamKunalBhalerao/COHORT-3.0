import React, { useEffect, useRef } from "react";

const usePrev = (value) => {
  const ref = useRef();
  console.log("Re-rendered happend with value ", value);

  useEffect(() => {
    console.log("Updated the ref to be ", value);
    ref.current = value;
  }, [value]);

  console.log("Returned ", ref.current);
  return ref.current;
};

export default usePrev;
