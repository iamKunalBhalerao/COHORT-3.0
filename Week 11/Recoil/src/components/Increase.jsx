import React from "react";
import { useSetRecoilState } from "recoil";
import { counter } from "../stores/atoms/Counter";

const Increase = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default Increase;
