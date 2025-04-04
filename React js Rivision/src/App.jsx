import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Network from "./pages/Network";
import Navbar from "./components/Navbar";
import NoPage from "./pages/NoPage";
import Notifications from "./pages/Notifications";
import Buisness from "./pages/Buisness";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Feed />} />
          <Route path={"/jobs"} element={<Jobs />} />
          <Route path={"/messages"} element={<Messages />} />
          <Route path={"/network"} element={<Network />} />
          <Route path={"/notifications"} element={<Notifications />} />
          <Route path={"/buisness"} element={<Buisness />} />
          <Route path={"*"} element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
