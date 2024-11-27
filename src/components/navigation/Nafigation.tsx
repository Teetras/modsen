import React from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import fav from "../../assets/bookmark.svg";
import home from "../../assets/home.svg";

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navigation">
      <ul className="list">
        {!isHomePage && (
          <li className="element">
            <img src={home} alt="Home" />
            <a href="/">Home</a>
          </li>
        )}
        <li className="element">
          <img src={fav} alt="Your favorites" />
          <a href="/#/fav">Your favorites</a>
        </li>
      </ul>
    </nav>
  );
}
