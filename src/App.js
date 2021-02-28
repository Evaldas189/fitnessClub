import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Schedule from "./components/pages/Schedule";
import AboutService from "./components/AboutService";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/info" component={AboutService} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
