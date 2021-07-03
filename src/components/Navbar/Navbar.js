import React, { useState, useEffect } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(props.navOpen);

  useEffect(() => {
    setNavOpen(props.navOpen);
    console.log(navOpen);
  }, [props.navOpen]);

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

            <li href="#" className="nav-link text-white my-2">
              <i className="fas fa-bug"></i>
              <span className="mx-2">Bugs</span>
            </li>
            <li href="#" className="nav-link text-white my-2">
              <i className="fas fa-calendar-alt"></i>
              <span className="mx-2">Schedule</span>
            </li>
            <li href="#" className="nav-link text-white my-2">
              <i className="fas fa-cog"></i>
              <span className="mx-2">Settings</span>
            </li>
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
    </>
  );
}

export default Navbar;
