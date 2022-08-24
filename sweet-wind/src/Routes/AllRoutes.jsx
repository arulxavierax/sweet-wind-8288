import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<h1>Features</h1>} />
        <Route path="/Premium" element={<h1>Premium</h1>} />
        <Route path="/recipes" element={<h1>Recipe</h1>} />
        <Route path="/articles" element={<h1>Article</h1>} />
        <Route path="/cookbook" element={<h1>Cookbook</h1>} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<>Join for Free</>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
