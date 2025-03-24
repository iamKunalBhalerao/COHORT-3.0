import React from "react";

const Lists = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>Todo : {todo.title}</h1>
            Done : {todo.done ? "Done!" : "Not Done Yet !"}
          </div>
        );
      })}
    </>
  );
};

export default Lists;
