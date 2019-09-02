<template>
  <div class="container has-text-dark-gray">
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
        <nav class="navbar is-hidden-desktop">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="../">
                <!-- <img src="../images/bulma.png" alt="Logo"> -->
                MJRdddxx
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <div class="tabs is-right">
                  <ul>
                    <li class="is-active">
                      <a>Home</a>
                    </li>
                    <li>
                      <a href>Item 0</a>
                    </li>
                    <li>
                      <a href>Item 1</a>
                    </li>
                    <li>
                      <a href>Item 2</a>
                    </li>
                    <li>
                      <a href>Item 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container content">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
</figure>
              <h1 class="title is-2 jtron-logotype">
                <span class="first-name">M Jabulani</span>
                <span class="second-name">Robbins</span>
                <span class="subtitle is-inline-block">Web Development Portfolio &amp; Résumé</span>
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
            <div class="column is-6">
              <!-- MAIN CONTENT WILL LIVE HERE -->

              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <h2 class="has-text-grey-lighter ">Recent Works</h2>
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
                <div class="column is-8 is-offset-2">
                  <p class="menu-label">
                    First Wealth
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/first_wealth_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <p class="menu-label">
                    The Ice Chef
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <p class="menu-label">
                    EDAS
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <p class="menu-label">
                    The Little Big Programme
                  </p>
                  <div class="image folio-tile box">
                    <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
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
html,
body {
  font-family: "Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.has-font-roboto-slab {
  font-family: "Roboto Slab", serif;
}

h1.jtron-logotype {
  font-family: "Roboto Slab", serif;
  color: teal;
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
</style>
