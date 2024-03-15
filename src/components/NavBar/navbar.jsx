import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img
                className="logo"
                src="src/assets/Logo.png"
                alt="Logo"
                width="100"
              />
            </Link>
            <h4 className="logo-text">CAREERSYNC</h4>
          </div>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="linkage" to="/findajob">
                  FIND A JOB
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="linkage" to="/postajob">
                  POST A JOB
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="linkage" to="/postaprofile">
                  POST A PROFILE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
