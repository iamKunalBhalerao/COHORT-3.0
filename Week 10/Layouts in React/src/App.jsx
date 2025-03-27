import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import StudentLayout from "./pages/StudentLayout";
import Login from "./pages/Login";
import TechrLogin from "./pages/TechrLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Home />} />
          <Route path="/student/login" element={<Login />} />
          <Route path="/student/blogs" element={<Blogs />} />
          <Route path="/student/contact" element={<Contact />} />
        </Route>
        <Route path="/teacher" element={<StudentLayout />}>
          <Route index element={<Home />} />
          <Route path="/teacher/login" element={<TechrLogin />} />
          <Route path="/teacher/blogs" element={<Blogs />} />
          <Route path="/teacher/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
