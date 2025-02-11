const Todo = (props) => {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>{props.done ? "Task is Done" : "Task is Incomplete"}</button>
        <hr />
      </div>
    </>
  );
};

export default Todo;
