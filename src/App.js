import React, { Component } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
