import React from "react";
import Logo from "assets/images/icons/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4">
      <div className="container-fluid">
        <a className="navbar-brand position-relative" href="#">
          <img src={Logo} alt="img" style={{ height: "50", width: "50" }} />
          <h1 className="text-logo position-absolute">
            Lent<span className="clr-black">era</span>
          </h1>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Location
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Success
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
