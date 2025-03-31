import React from "react";
import useDebounce from "./Hooks/useDebounce";

const App = () => {
  async function sendDataToBackend() {
    // const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // const json = data.json();
    // return json;
    console.log("sendDataToBackend() Function Called");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <div>
        <input type="text" onChange={debouncedFn} />
      </div>
    </>
  );
};

export default App;
