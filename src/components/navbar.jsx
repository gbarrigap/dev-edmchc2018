import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        class="navbar is-fixed-bottom"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-menu">
          <div class="navbar-start">
            <a
              href="#inicios"
              className="navbar-item is-tab is-active"
              data-scroll-nav="0"
              data-scroll-goto="0"
            >
              Inicio
            </a>
            <a
              href="#organizadores"
              className="navbar-item is-tab"
              data-scroll-nav="1"
              data-scroll-goto="1"
            >
              Organizadores
            </a>
            <a
              href="#actividades"
              className="navbar-item is-tab"
              data-scroll-nav="2"
              data-scroll-goto="2"
            >
              Actividades
            </a>
            <a
              href="#social"
              className="navbar-item is-tab"
              data-scroll-nav="3"
              data-scroll-goto="3"
            >
              Social
            </a>
            <a
              href="#ubicación"
              className="navbar-item is-tab"
              data-scroll-nav="4"
              data-scroll-goto="4"
            >
              Ubicación
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
