import React from "react";
import "./header.css";
import logo from "../../assets/museum-logo1.svg";
import Navigation from "../navigation/Nafigation";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Museum Logo" className="logo" />
        </div>
        <div className="button-container">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
