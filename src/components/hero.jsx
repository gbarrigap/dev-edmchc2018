import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-head">
          <div className="columns is-multiline is-mobile is-centered is-marginless">
            <div className="column is-flex is-centered">
              <figure className="image">
                <img src="logos/logo_ministerio.png" alt="" />
              </figure>
              <figure className="image">
                <img src="logos/logo_conservatorio.png" alt="" />
              </figure>
              <figure className="image">
                <img src="logos/logo_facultad.png" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="subtitle is-2 has-text-white">
              Conservatorio de Música UACh
            </h1>
            <h1 className="title is-1 has-text-white">
              Encuentro de Música Chilena Contemporánea 2018
            </h1>
            <h2 className="subtitle is-3 has-text-white">
              Pensamiento creativo e identidades del sur
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
