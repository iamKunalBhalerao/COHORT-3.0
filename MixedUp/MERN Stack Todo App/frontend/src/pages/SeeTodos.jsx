import React from "react";
import TodoCard from "../components/TodoCard";

const SeeTodos = () => {
  let title = "This is Title of card";
  let description =
    "This is description that is new carosfjinis is description that is new carosfjinis is description that is new carosfjinis is description that is new carosfjinis is description that is new carosfjinv v of card";

  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center gap-4 p-4">
        <TodoCard title={title} description={description} />
        <TodoCard title={title} description={description} />
        <TodoCard title={title} description={description} />
      </section>
    </>
  );
};

export default SeeTodos;
