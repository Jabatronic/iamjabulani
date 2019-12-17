<template>
  <nav class="navbar is-fixed-top jtron-top-nav is-white" role="navigation" aria-label="main navigation">
    <div
      class="container"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <span class="jtron-logotype">MJR</span>
        </nuxt-link>
        <a
          :class="{'is-active': isMenuOpen}"
          @click="isMenuOpen = !isMenuOpen"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarMainTop"
        @click="isMenuOpen = false"
        :class="{'is-active': isMenuOpen}"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">
            Home
          </nuxt-link>

          <nuxt-link to="portfolio" class="navbar-item">
            Portfolio
          </nuxt-link>

          <nuxt-link to="resume" class="navbar-item">
            Résumé
          </nuxt-link>

          <!-- <nuxt-link
            to="/"
            class="navbar-item"
          >
            Make Contact
          </nuxt-link> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <!--
              TODO: Add other links
              -->
          </div>
        </div>
      </div>
    </div>
    <!-- end div -->
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  head () {
    return {
      // ...
    }
  },
  data () {
    return {
      isMenuOpen: false
    }
  },
  watch: {
    $route (to, from) {
      this.isMenuOpen = false
    }
  }
}
</script>

<style lang="scss">
#navbarBasicExample {
  min-height: 100vh;
}

.jtron-top-nav {
    // box-shadow: 8px 2px 4px rgba(185, 183, 183, 0.2);
    box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2);
}

@media screen and (max-width: 1023px) {
  .navbar-menu.is-active {
      display: block;
      height: 100vh;
  }
}
</style>
