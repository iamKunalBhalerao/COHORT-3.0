import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout Imports
import AuthLayout from "./layouts/Auth.layout";
import MainLayout from "./layouts/Main.layout";
import DashboardLayout from "./layouts/Dashboard.layout";

// Page Imports
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
