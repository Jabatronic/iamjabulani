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

</style>
