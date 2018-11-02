import React, { Component } from "react";
import Hero from "./hero";

class Heros extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero />
        <Hero />
        <Hero />
      </div>
    );
  }
}

export default Heros;
