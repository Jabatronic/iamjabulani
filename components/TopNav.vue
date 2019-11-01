<template>
  <nav class="navbar is-fixed-top jtron-top-nav is-white" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="jtron-logotype">MJR</span>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          :class="{'is-active': isMenuOpen}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarMainTop" class="navbar-menu" :class="{'is-active': isMenuOpen}">
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

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <!-- <div class="buttons">
              <a class="button is-teal has-text-white">
                Client Log in
              </a>
            </div> -->
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
    box-shadow: 8px 2px 4px rgba(185, 183, 183, 0.2);
}
</style>
