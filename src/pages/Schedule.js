import React, { useState, useEffect, useContext } from "react";
import { NavbarContext } from "../helper/Context";

function Schedule() {
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  return (
    <div>
      <div
        class="p-1 my-container active-cont"
        style={navOpen ? { marginLeft: "250px" } : { marginLeft: "50px" }}
      >
        <div className="m-3">
          <h3>Schedule Page (Coming Soon)</h3>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
