<template>
  <div>
    <top-nav />
    <div class="container is-desktop">
      <main class="jtron-main">
        <nuxt />
      </main>
    </div>
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
