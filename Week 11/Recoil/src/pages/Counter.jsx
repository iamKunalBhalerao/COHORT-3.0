import React from "react";
import Value from "../components/Value";
import Increase from "../components/Increase";
import Decrease from "../components/Decrease";
import Reset from "../components/Reset";
import { RecoilRoot } from "recoil";

const Counter = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <RecoilRoot>
          <Value />
          <Increase />
          <Decrease />
          <Reset />
        </RecoilRoot>
      </div>
    </>
  );
};

export default Counter;
