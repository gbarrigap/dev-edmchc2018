import React, { Component } from "react";
import Hero from "./hero";
import Actividades from "./heros/actividades";
import Organizadores from "./heros/organizadores";
import Social from "./heros/social";
import Ubicacion from "./heros/ubicacion";
import Inicio from "./heros/inicio";

class Heros extends Component {
  state = {
    heros: [
      {
        id: "organizadores",
        content: <Organizadores />
      },
      {
        id: "actividades",
        content: <Actividades />
      },
      {
        id: "social",
        content: <Social />
      },
      {
        id: "ubicacion",
        content: <Ubicacion />
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Inicio />
        {this.state.heros.map(h => (
          <Hero key={h.id} hero={h} />
        ))}
      </React.Fragment>
    );
  }
}

export default Heros;
