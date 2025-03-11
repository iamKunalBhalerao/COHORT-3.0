import Post from "./components/Post";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default App;
