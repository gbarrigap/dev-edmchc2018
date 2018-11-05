import React, { Component } from "react";
import "./App.css";
import Heros from "./components/heros";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Heros />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
