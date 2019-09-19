<template>
  <div class="container is-desktop">
    <top-nav />
    <main class="jtron-main">
      <nuxt />
    </main>
    <footer>
      <app-footer />
    </footer>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    TopNav,
    AppFooter
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

/* Fonts */
$title-font:  "Roboto Slab", serif;

.has-text-teal {
  color: $teal;
}

.is-teal {
  background: $teal;
}

.has-font-roboto-slab {
  font-family: $title-font;
}

.jtron-logotype {
  font-family: $title-font;
  color: $teal !important;
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

.jtron-main {
  margin-top: 32px;
  @include until($desktop) {
    margin-left: 32px;
    margin-right: 32px;
  }

  max-width: 100vw;
  max-width: 100%;
}
</style>
