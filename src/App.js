import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HeroVideo from "./components/heroVideo";
import HeroUbicacion from "./components/heroUbicacion";
import HeroOrganizadores from "./components/heroOrganizadores";
import HeroActividades from "./components/heroActividades";
import HeroSocial from "./components/heroSocial";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroVideo />
        <HeroOrganizadores />
        <HeroActividades />
        <HeroSocial />
        <HeroUbicacion />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
