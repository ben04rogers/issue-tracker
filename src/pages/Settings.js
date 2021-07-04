import React, { useState, useEffect, useContext } from "react";
import { NavbarContext } from "../contexts/NavContext";

function Settings() {
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  document.title = "Issue Tracker | Settings";

  return (
    <div>
      <div
        class="p-1 my-container active-cont"
        style={navOpen ? { marginLeft: "250px" } : { marginLeft: "50px" }}
      >
        <div className="m-3">
          <h3>Settings Page (Coming Soon)</h3>
        </div>
      </div>
    </div>
  );
}

export default Settings;
