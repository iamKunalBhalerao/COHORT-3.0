import React from "react";
import Fragment from "./components/Fragment";

const App = () => {
  return (
    // React js cannot return tow or mare child when returning from a component
    // JSX have only one parent element to return
    // So we use Fragments to wrap the child elements (<></>)
    <>
      <div>
        <Fragment />
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default App;
