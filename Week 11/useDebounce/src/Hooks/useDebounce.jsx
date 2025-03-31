import React, { useRef } from "react";

const useDebounce = (orignalFn) => {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orignalFn, 700);
  };

  return fn;
};

export default useDebounce;
