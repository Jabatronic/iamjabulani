<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-out-back"
              class="
                is-hidden-tablet title is-size-3
                has-text-centered has-text-teal
                "
            >
              <span class="has-font-roboto-slab">I am<br>Jabulani Robbins</span>
            </div>
            <div class="column is-2-desktop is-2-tablet">
              <figure
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out-back"
                class="image container is-128x128"
              >
                <img
                  :src="require('~/assets/images/jabulani_robbins_2.jpg').src"
                  class=""
                >
              </figure>
              <br>
            </div>
            <div class="column is-6-desktop">
              <div
                data-aos="fade-left"
              >
                <div>
                  <h1 class="title is-size-2 has-text-teal has-font-roboto-slab is-hidden-mobile">
                    <span>I am Jabulani Robbins</span>
                  </h1>

                  <h2 class="subtitle is-size-4 has-text-centered-mobile">
                    <b>Creative Web Developer, Critical Thinker, Afronaut...</b>
                    <img
                      :src="require('~/assets/images/rocket-trans.png').src"
                      class="my-rocket"
                    >
                  </h2>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    data-aos-easing="ease-in-out-back"
                  >
                    <h5 class="subtitle is-size-5 has-text-grey-dark is-italic has-text-centered-mobile">
                      &amp; all round good egg...
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-aos="fade-up"
      data-aos-easing="ease-out-back"
    >
      <the-portfolio />
    </section>
  </div>
</template>

<script>
import ThePortfolio from '~/components/portfolio/ThePortfolio.vue'
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

  .my-rocket {
    display: inline-block;
    position: relative;
    top: .7rem;
  }
</style>
