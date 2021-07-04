import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { NavbarContext } from "../../contexts/NavContext";
import "./Navbar.css";

function Navbar() {
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  return (
    <>
      <div
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column bg-primary p-3"
        id="sidebar"
        style={navOpen ? { width: "250px" } : { width: "50px" }}
      >
        <ul
          className="nav flex-column text-white w-100 h-100"
          style={navOpen ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <a href="#" className="nav-link h4 text-white">
              <img src={logo} alt="logo" className="logo" />
            </a>

            <Link to="/">
              <li href="#" className="nav-link text-white my-2">
                <i className="fas fa-bug"></i>
                <span className="mx-2">Bugs</span>
              </li>
            </Link>

            <Link to="/schedule">
              <li href="#" className="nav-link text-white my-2">
                <i className="fas fa-calendar-alt"></i>
                <span className="mx-2">Schedule</span>
              </li>
            </Link>

            <Link to="/settings">
              <li href="#" className="nav-link text-white my-2">
                <i className="fas fa-cog"></i>
                <span className="mx-2">Settings</span>
              </li>
            </Link>
          </div>
          <li href="#" className="mt-auto nav-link text-white my-2">
            <i className="fas fa-sign-out-alt"></i>
            <span className="mx-2">Logout</span>
          </li>
        </ul>
        <span href="#" className="nav-link h4 w-100 mb-5">
          <a href="">
            <i className="bx bxl-instagram-alt text-white"></i>
          </a>
          <a href="">
            <i className="bx bxl-twitter px-2 text-white"></i>
          </a>
          <a href="">
            <i className="bx bxl-facebook text-white"></i>
          </a>
        </span>
      </div>
      <div
        class="p-1 my-container active-cont"
        style={navOpen ? { marginLeft: "250px" } : { marginLeft: "50px" }}
      >
        <nav className="navbar top-navbar navbar-light bg-light px-3">
          <button
            className="btn btn-primary"
            id="menu-btn"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <i class="fas fa-angle-double-left"></i>
            ) : (
              <i class="fas fa-angle-double-right"></i>
            )}
          </button>
          <div>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-danger m-2 text-white">Sign Up</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
