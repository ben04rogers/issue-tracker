import React, { useState, useEffect, useContext } from "react";
import AddIssue from "../components/AddIssue/AddIssue";
import CurrentIssue from "../components/CurrentIssue/CurrentIssue";
import { NavbarContext } from "../contexts/NavContext";

function Bugs() {
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  document.title = "Issue Tracker | Bugs";
  return (
    <div
      class="p-1 my-container active-cont"
      style={navOpen ? { marginLeft: "250px" } : { marginLeft: "50px" }}
    >
      <AddIssue />
    </div>
  );
}

export default Bugs;
