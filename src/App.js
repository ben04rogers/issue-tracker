import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarContext } from "./helper/Context";

import Navbar from "./components/Navbar/Navbar";
import Bugs from "./pages/Bugs";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      <Router>
        <Navbar navOpen={true} />
        <Switch>
          <Route path="/" exact component={Bugs}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
      </Router>
    </NavbarContext.Provider>
  );
}

export default App;
