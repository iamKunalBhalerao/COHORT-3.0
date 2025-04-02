import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counter } from "./stores/atoms/Counter";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
};

const Counter = () => {
  return (
    <>
      <div>
        <Value />
        <Increase />
        <Decrease />
        <Reset />
      </div>
    </>
  );
};

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

const Increase = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

const Decrease = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
};

const Reset = () => {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
