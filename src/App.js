import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarContext } from "./contexts/NavContext";

import Navbar from "./components/Navbar/Navbar";
import Bugs from "./pages/Bugs";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <AuthProvider>
      <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
        <Router>
          <Navbar navOpen={true} />
          <Switch>
            <Route path="/" exact component={Bugs}></Route>
            <Route path="/schedule" component={Schedule}></Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </NavbarContext.Provider>
    </AuthProvider>
  );
}

export default App;
