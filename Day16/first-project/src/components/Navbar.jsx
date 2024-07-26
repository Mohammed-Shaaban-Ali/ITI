import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar active navbar-expand-lg navbar-dark position-fixed top-0 start-0 px-5 w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="# ">
          BoostCreat
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-light ms-auto">
            <li className="nav-item">
              <a href="# " className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
