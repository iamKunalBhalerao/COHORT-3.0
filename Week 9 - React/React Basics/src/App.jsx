import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Go and Code",
      description: "Code a Todo app",
      done: false,
    },
  ]);

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }

    newArray.push({
      title: "Go to Barber shop",
      description: "Cut hair properly",
      done: false,
    });
    setTodos(newArray);
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <p>{JSON.stringify(todos)}</p>
      </div>
    </>
  );
};

export default App;
