import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  const [sidebarToggle, setsidebarToggle] = useState(true);

  return (
    <>
      <div className="flex h-screen">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsidebarToggle={setsidebarToggle}
        />
        <MainContent setsidebarToggle={setsidebarToggle} />
      </div>
    </>
  );
};

export default App;
