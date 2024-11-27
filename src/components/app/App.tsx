import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "../../pages/home/Home";
import Art from "../../pages/art/Art";
import Favorites from "../../pages/favorites/Favorites";
import Header from "../header/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

