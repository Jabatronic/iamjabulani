<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div
              class="
                is-hidden-tablet title is-size-3
                has-text-centered has-text-teal
                "
            >
              <span class="has-font-roboto-slab">I am<br>Jabulani Robbins</span>
            </div>
            <div class="column is-2-desktop is-2-tablet">
              <figure
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-easing="ease-in-out-back"
                class="image container is-128x128"
              >
                <img
                  class="is-rounded is-me"
                  :src="require('~/assets/images/jabulani_robbins.jpg').src"
                  :srcSet="require('~/assets/images/jabulani_robbins.jpg').srcSet"
                >
              </figure>
            </div>
            <div class="column is-6-desktop">
              <div
                data-aos="fade-up"
              >
                <div>
                  <h1 class="title is-size-2 has-text-teal has-font-roboto-slab is-hidden-mobile">
                    <span>I am Jabulani Robbins</span>
                  </h1>
                  <h2 class="title is-size-4 has-text-centered-mobile">
                    <b>Creative Web Developer, Critical Thinker, Afronaut</b>
                  </h2>
                  <hr class="is-teal">
                  <div class="mb-30">
                    <!--
                      ToDo: Remove this really crappy way to make a responsive margin!! :/
                      -->
                  </div>
                </div>
              </div>
              <div class="content">
                <p class="intro-text" data-aos="fade-up">
                  I made my first website in 2000. Back in the days when table-based layouts, slices, and keyword stuffing was the norm!
                </p>

                <p class="intro-text" data-aos="fade-up">
                  Needless to say, things have evolved somewhat since then and I am loving being a Sass(y), Webpack(ing), Javascript(aculous),
                </p>
                <p class="intro-text" data-aos="fade-up">
                  Web Developing Warlock <span class="is-size-3">🧙</span>
                  ...Or something like that...
                </p>
                <p class="intro-text" data-aos="fade-up">
                  Anyway, you get the picture. So feel the️️️️ ❤️❤️❤️ and check out <nuxt-link to="portfolio">
                    some of my work
                  </nuxt-link> OR, if you want to get serious, take a squint at <nuxt-link to="resume">
                    résumé
                  </nuxt-link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <the-portfolio />
    </section>
  </div>
</template>

<script>
import ThePortfolio from '~/components/ThePortfolio.vue'
export default {
  name: 'Index',
  components: {
    ThePortfolio
  }
}
</script>

<style lang="scss">
  p.intro-text {
    margin: 0 auto;
  }

  img.is-me {
    border: 1px solid $grey-lighter;
  }

</style>
