<template>
  <div class="container is-desktop">
    <top-nav />
    <main class="jtron-main">
      <nuxt />
    </main>
    <footer class="sticky-footer">
      <!-- <app-footer /> -->
    </footer>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
// import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    TopNav
    // AppFooter
  }
}
</script>

<style lang="scss">
p {
    font-family: 'Roboto';
    max-width: 40rem;
    font-size: 1.2rem;
}

  // // Footer mods
  // footer.sticky-footer {
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 10;
  //   width: 100vw;
  //   background: #fff;
  // }
</style>
