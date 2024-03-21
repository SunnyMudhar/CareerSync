import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/careersync-logo.png";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img
                className="logo"
                src= { Logo }
                alt="career sync logo"
              />
            </Link>
            <NavLink className="logo-text" to="/">
                CAREERSYNC
            </NavLink>
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
                <NavLink className="linkage" to="/findaprofile">
                  FIND TALENT
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
