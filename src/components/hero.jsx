import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section
        className="hero has-background-dark is-fullheight-with-navbar"
        id={this.props.hero.id}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            {this.props.hero.content}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
