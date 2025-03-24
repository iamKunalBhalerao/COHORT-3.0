import React from "react";
import Lists from "./components/Lists";

const App = () => {
  const todos = [
    { id: 1, title: "Go and Code", done: true },
    { id: 2, title: "Go to gym", done: false },
  ];
  return (
    <div>
      <Lists todos={todos} />
    </div>
  );
};

export default App;
