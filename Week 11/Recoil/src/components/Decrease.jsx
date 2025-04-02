import React from "react";
import { useSetRecoilState } from "recoil";
import { counter } from "../stores/atoms/Counter";

const Decrease = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
};

export default Decrease;
