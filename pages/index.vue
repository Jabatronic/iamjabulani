<template>
  <div class="has-text-dark-gray">
    <section class="hero is-fullheight-with-navbar is-bold">
      <div class="hero-head">
        <nav class="navbar container is-fixed-top is-white" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <span class="jtron-logotype">MJR</span>
              <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                Documentation
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
                  </a>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                   <a class="button is-teal has-text-white">
                    Client Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <figure class="image is-128x128">
                <img class=" image is-rounded" src="~/assets/images/jabulani_robbins.jpg">
              </figure>
              <h1 class="title is-2 jtron-logotype">
                <span class="first-name">M Jabulani</span>
                <span class="second-name">Robbins</span>
                <span class="subtitle is-block">Web Development Portfolio &amp; Résumé</span>
              </h1>
              <div>
                <p>
                  I am a web developer/designer with ability, knowledge, and experience across the
                  <a href="#">full-stack</a> but weighted towards the
                  <a href="#">front-end</a>.
                </p>
                <p>
                  <a href="#">HTML5</a>,
                  <a href="#">CSS3</a>, and
                  <a href="#">JavaScript</a> are part of my everyday vocabulary and custom
                  <a href="#">Wordpress</a> sites make up a large part of my <a href="#">commercial
                    experience</a>.
                </p>
                <p />
              </div>
            </div>
            <div class="column is-5">
              <!-- MAIN CONTENT WILL LIVE HERE -->

              <div class="columns">
                <div class="column">
                  <h2 class="has-text-grey-lighter ">
                    Recent Works
                  </h2>
                  <hr>
                  <p class="menu-label">
                    Dantanna Beatz
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/dantanna_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="menu-label">
                    First Wealth
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/first_wealth_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="menu-label">
                    The Ice Chef
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="menu-label">
                    EDAS
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/edas_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="menu-label">
                    The Little Big Programme
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="menu-label">
                    The Big Programme
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <!-- *************************** -->
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li>
                <a>And this is the bottom</a>
              </li>
              <li>
                <a>And this is the bottom</a>
              </li>
              <li>
                <a>And this is the bottom</a>
              </li>
              <li>
                <a>And this is the bottom</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    // ...
  }
}
</script>

<style lang="scss">
// * { background-color: rgba(255,0,0,.2); }
// * * { background-color: rgba(0,255,0,.2); }
// * * * { background-color: rgba(0,0,255,.2); }
// * * * * { background-color: rgba(255,0,255,.2); }
// * * * * * { background-color: rgba(0,255,255,.2); }
// * * * * * * { background-color: rgba(255,255,0,.2); }
// * * * * * * * { background-color: rgba(255,0,0,.2); }
// * * * * * * * * { background-color: rgba(0,255,0,.2); }
// * * * * * * * * * { background-color: rgba(0,0,255,.2); }

html,
body {
  font-family: "Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Colours */
$teal: teal;

.has-text-teal {
  color: $teal;
}

.is-teal {
  background: $teal;
}

.has-font-roboto-slab {
  font-family: "Roboto Slab", serif;
}

.jtron-logotype {
  font-family: "Roboto Slab", serif;
  color: $teal !important;
}

.jtron-logotype span.second-name {
  // Logotype inflection
}

.j-primary {
  visibility: hidden;
}

/* Folio Tiles */
.folio-tile {
  padding: 0;
  overflow: hidden;
}

.folio-tile img {
  transition: all 0.6s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
}

/* Nav mods */
.hero .navbar {
    background: #fff;
}
</style>
