import React, { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard.jsx";

const SeeTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/api/v1/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center gap-2 p-4">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              title={todo.title}
              description={todo.description}
              // isComplete={
              //   todo.iscomplete == true ? "Completed" : "Mark as Complete"
              // }
            />
          );
        })}
      </section>
    </>
  );
};

export default SeeTodos;
