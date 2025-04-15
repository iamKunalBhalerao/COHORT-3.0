import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SeeTodos from "./pages/SeeTodos";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<SeeTodos />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/update" element={<UpdateTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
