import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Allen</Link>|
        <Link to="/neet/online-coaching-class-11">Class 11</Link>|
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const ErrorPage = () => {
  return <div>404 Page Not Found</div>;
};

const Landing = () => {
  return <div>Welcome to allen</div>;
};

const Class11Program = () => {
  return <div>NEET programs for Class 11th</div>;
};

const Class12Program = () => {
  return <div>NEET programs for Class 12th</div>;
};

export default App;
