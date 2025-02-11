import { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Go and Code",
      description: "Code a Todo app",
      done: true,
    },
  ]);
  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }

    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: false,
    });
    setTodos(newArray);
  }

  return (
    <>
      <div>
        <input required type="text" id="title" placeholder="Totle" />
        <br />
        <br />
        <input
          required
          type="text"
          id="description"
          placeholder="description"
        />
        <br />
        <br />
        <button onClick={addTodo}>Add Todo</button>
        <br />

        {todos.map((todo) => (
          <Todo
            key=""
            title={todo.title}
            description={todo.description}
            done={todo.true}
          />
        ))}
      </div>
    </>
  );
};

export default App;
