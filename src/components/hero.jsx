import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section
        class="hero is-fullheight-with-navbar video"
        data-scroll-index="0"
      >
        <div class="hero-video">
          <video poster="" id="bgvid" playsinline autoPlay muted loop>
            <source src="Ensamble.mp4" type="video/webm" />
          </video>
        </div>

        <div class="hero-head">
          <div class="columns is-multiline is-mobile is-centered is-marginless">
            <div class="column is-flex is-centered">
              <figure class="image">
                <img src="logos/logo_ministerio.png" alt="" />
              </figure>
              <figure class="image">
                <img src="logos/logo_conservatorio.png" alt="" />
              </figure>
              <figure class="image">
                <img src="logos/logo_facultad.png" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="subtitle is-2 has-text-white">
              Conservatorio de Música UACh
            </h1>
            <h1 class="title is-1 has-text-white">
              Encuentro de Música Chilena Contemporánea 2018
            </h1>
            <h2 class="subtitle is-3 has-text-white">
              Pensamiento creativo e identidades del sur
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
