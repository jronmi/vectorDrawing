import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Drawing from "./pages/Drawing.js";
import Home from "./pages/Home.js";
import NavBar from "./modules/NavBar.js";

//import "../utilities.css";
import "../styles/globals.css"

import { get, post } from "../utilities.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Home path="/" />
          <Drawing path="/drawing"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
