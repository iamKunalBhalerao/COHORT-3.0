import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";
import Toggle from "./components/Toggle";
import Trending from "./components/Trending";

const App = () => {
  return (
    <>
      <Toggle />
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
          <Post
            title={"100xDevs"}
            subtitle={"33, 348 followers"}
            time={"2 days ago"}
          />
          <Post
            title={"100xDevs"}
            subtitle={"Promoted"}
            // time={"2 days ago"}
          />
        </div>
        <div>
          <Trending />
        </div>
      </div>
    </>
  );
};

export default App;
