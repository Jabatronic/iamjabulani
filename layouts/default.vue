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

/* Generic Classes */
p {
  font-family: 'Raleway';
  max-width: 30rem;
}

.has-text-teal {
  color: $teal !important;
}

.is-teal {
  background: $teal !important;
}

.has-font-roboto-slab {
  font-family: $title-font;
}

.jtron-logotype {
  font-family: $title-font;
  color: $teal !important;
}

/* Folio Tiles */
.folio-tile.box {
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
