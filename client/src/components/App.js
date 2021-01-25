import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Home from "./pages/Home.js";
import Inspiration from "./pages/Inspiration";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

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
          <Inspiration path="/inspiration"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
