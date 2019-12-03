<template>
  <div class="container is-desktop">
    <top-nav />
    <main class="jtron-main">
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TopNav,
    TheFooter
  }
}
</script>

<style lang="scss">
//...
</style>
