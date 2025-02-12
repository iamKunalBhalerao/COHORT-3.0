import { useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter");

  useEffect(function () {
    setInterval(function () {
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    console.log("mounted");
  }, []);

  return <h1>Counter {count}</h1>;
}

export default App;
