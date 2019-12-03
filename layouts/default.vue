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
  head () {
    return {
      title: 'Jabulani Robbins - Web Development Portfolio & Resume',
      meta: [
        // Open Graph
        { name: 'og:title', content: 'IAMJABULANI' },
        { name: 'og:description', content: 'The Web Development Portfolio & Resume' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://iamjabulani.tech' },
        { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@?????' },
        { name: 'twitter:title', content: 'IAMJABULANI' },
        { name: 'twitter:description', content: 'The Web Development Portfolio & Resume' },
        { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
        { name: 'twitter:image:alt', content: 'NuxtJS Logo' }
      ]
    }
  },
  components: {
    TopNav,
    TheFooter
  }
}
</script>

<style lang="scss">
//...
</style>
