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
      titlel: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: false,
    });
    setTodos(newArray);
  }

  return (
    <>
      <div>
        <input type="text" id="title" placeholder="Totle" />
        <br />
        <br />
        <input type="text" id="description" placeholder="description" />
        <br />
        <br />
        <button onClick={addTodo}>Add Todo</button>
        <br />
        <br />
        <hr />
        <p>{JSON.stringify(todos)}</p>
      </div>
    </>
  );
};

export default App;
