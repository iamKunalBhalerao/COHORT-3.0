export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return (
    <>
      <div className="">
        <h1>This is Home Page</h1>
        {data.map((item: { id: string; title: string; completed: boolean }) => (
          <div
            className="bg-slate-800 rounded-lg shadow border-1 border-slate-500 p-4 my-2 flex flex-col justify-start items-start gap-2"
            key={item.id}
          >
            <p>id: {item.id}</p>
            <h1>title: {item.title}</h1>
            <button>isCompleted: {item.completed}</button>
          </div>
        ))}
      </div>
    </>
  );
}
