import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Webinars from "./components/Webinars";
import Billing from "./components/Billing";
import UserManagement from "./components/UserManagement";
import Settings from "./components/Settings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/webinars" element={<Webinars />} />
            <Route path="/dashboard/billing" element={<Billing />} />
            <Route
              path="/dashboard/usermanagement"
              element={<UserManagement />}
            />
            <Route path="/dashboard/Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
