import React from "react";
import { Route, Routes } from "react-router-dom";
import Features from "./Features";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import Premium from "./Premium";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/recipes" element={<h1>Recipe</h1>} />
        <Route path="/articles" element={<h1>Article</h1>} />
        <Route path="/cookbook" element={<h1>Cookbook</h1>} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />}  />
      </Routes>
    </div>
  );
}

export default AllRoutes;
