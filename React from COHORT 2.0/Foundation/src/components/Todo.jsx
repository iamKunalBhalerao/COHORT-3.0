import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  function onClickHandler() {
    return <h2>{todo}</h2>;
  }
  return (
    <>
      <h1>Todo App in React</h1>

      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={onClickHandler}>Add Todo</button>
    </>
  );
};

export default Todo;
