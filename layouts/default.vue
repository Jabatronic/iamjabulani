<template>
  <div class="has-text-dark-gray">
    <section class="hero is-fullheight-with-navbar is-bold">
      <div class="hero-head">
        <top-nav />
      </div>
      <div class="hero-body">
        <nuxt />
      </div>
      <app-footer />
    </section>
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
