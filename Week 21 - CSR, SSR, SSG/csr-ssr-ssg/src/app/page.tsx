export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: {
      revalidate: 10
    }
  });

  const data = response.json();

  return (
    <>
      <div className="">
        {data.map((todo: any) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h1>{todo.completed}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
