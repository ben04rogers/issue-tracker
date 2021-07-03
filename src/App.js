import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(true);
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="App">
      <Navbar navOpen={navOpen} />

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
            <button className="btn btn-primary">Current Issues</button>
            <button className="btn btn-danger m-2 text-white">Add Issue</button>
          </div>
        </nav>

        <div className="m-3">
          <h3 className="m-0">Issue Tracker</h3>
          {addIssue ? <AddIssue /> : <CurrentIssue />}
        </div>
      </div>
    </div>
  );
}

export default App;
