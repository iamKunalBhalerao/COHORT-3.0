import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const ContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

const Parent = () => {
  return (
    <>
      <ContextProvider>
        <IncreaseCounter />
        <DecreaseCounter />
        <Reset />
        <Counter />
      </ContextProvider>
    </>
  );
};

const IncreaseCounter = () => {
  const { setCounter } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
    </>
  );
};

const DecreaseCounter = () => {
  const { setCounter } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrease</button>
    </>
  );
};

const Reset = () => {
  const { setCounter } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
};

const Counter = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>Counter : {counter}</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Parent />
    </>
  );
};

export default App;
