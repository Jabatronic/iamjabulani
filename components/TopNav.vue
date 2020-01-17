<template>
  <nav class="navbar is-fixed-top jtron-top-nav is-white" role="navigation" aria-label="main navigation">
    <div
      class="container"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <span class="jtron-logotype">JR</span>
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
          <a class="navbar-item" href="https://github.com/Jabatronic/iamjabulani" title="Check out the sauce!">
            <svg
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            ><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
          </a>
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
