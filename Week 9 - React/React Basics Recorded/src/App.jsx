import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <div className="profileCard">
        <ProfileCard />
      </div>
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
      <div>
        <Trending />
      </div>
    </div>
  );
};

export default App;
