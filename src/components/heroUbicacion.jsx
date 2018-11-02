import React, { Component } from "react";

class HeroUbicacion extends Component {
  state = {};
  render() {
    return (
      <section
        className="hero has-background-dark is-fullheight-with-navbar"
        id="ubicacion"
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white">Ubicación</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroUbicacion;
