import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Results from "./pages/Results";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import TestSeries from "./pages/TestSeries";
import Scholorships from "./pages/Scholorships";
import StudyMaterial from "./pages/StudyMaterial";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="test-series" element={<TestSeries />} />
          <Route path="scholorships" element={<Scholorships />} />
          <Route path="results" element={<Results />} />
          <Route path="study-material" element={<StudyMaterial />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
