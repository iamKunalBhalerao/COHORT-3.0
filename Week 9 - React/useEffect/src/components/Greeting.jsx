import React from "react";

const Greeting = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default Greeting;
