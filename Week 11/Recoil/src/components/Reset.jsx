import React from "react";
import { useSetRecoilState } from "recoil";
import { counter } from "../stores/atoms/Counter";

const Reset = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Reset;
