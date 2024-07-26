import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header py-3">
      <div className="container">
        <Navbar/>
        <Home/>
      </div>
    </header>
  );
}
