import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout Imports
import AuthLayout from "./layouts/Auth.layout";
import MainLayout from "./layouts/Main.layout";
import DashboardLayout from "./layouts/Dashboard.layout";

// Auth Page Imports
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

// Home Page Imports
import Home from "./pages/Home";

// Dashboard Page Imports
import Dashboard from "./pages/dashboard/Dashboard";
import Tweets from "./pages/dashboard/Tweets";
import Videos from "./pages/dashboard/Videos";
import Documents from "./pages/dashboard/Documents";
import Links from "./pages/dashboard/Links";
import Tags from "./pages/dashboard/Tags";
import DashboardHome from "./pages/dashboard/DashboardHome";

const App = () => {
  return (
    <>
      <div className="font-[gilroy]">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/all" element={<Dashboard />} />
            <Route index element={<DashboardHome />} />
            <Route path="/dashboard/tweets" element={<Tweets />} />
            <Route path="/dashboard/videos" element={<Videos />} />
            <Route path="/dashboard/docs" element={<Documents />} />
            <Route path="/dashboard/links" element={<Links />} />
            <Route path="/dashboard/tags" element={<Tags />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
