import React from "react";
import { useRecoilValue } from "recoil";
import { counter } from "../stores/atoms/Counter";

const Value = () => {
  const count = useRecoilValue(counter);

  return (
    <>
      <div>
        <h3>Value : {count}</h3>
      </div>
    </>
  );
};

export default Value;
