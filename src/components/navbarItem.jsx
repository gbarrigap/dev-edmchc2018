import React, { Component } from "react";

class NavbarItem extends Component {
  render() {
    return (
      <a
        href={this.props.item.href}
        className={
          this.props.item.active
            ? "navbar-item is-tab is-active"
            : "navbar-item is-tab"
        }
        onClick={() => this.props.onClick(this.props.item)}
      >
        {this.props.item.text}
      </a>
    );
  }
}

export default NavbarItem;
