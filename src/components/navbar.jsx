import React, { Component } from "react";
import NavbarItem from "./navbarItem";

class Navbar extends Component {
  state = {
    items: [
      { text: "Inicio", href: "#inicio", active: true },
      { text: "Organizadores", href: "#organizadores", active: false },
      { text: "Actividades", href: "#actividades", active: false },
      { text: "Social", href: "#social", active: false },
      { text: "Ubicación", href: "#ubicacion", active: false }
    ]
  };

  handleClick = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items.map(i => (i.active = false));
    items[index].active = true;
    this.setState(items);
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-bottom is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu">
          <div className="navbar-start">
            {this.state.items.map(i => (
              <NavbarItem key={i.href} onClick={this.handleClick} item={i} />
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
