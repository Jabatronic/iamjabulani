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
                class="image container is-128x128 has-text-centered-mobile"
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
                  <h2 class="subtitle is-size-5 has-text-weight-bold has-text-centered-mobile">
                    Creative Web Developer, Critical Thinker, Afronaut...
                    <img
                      :src="require('~/assets/images/rocket-trans.png').src"
                      class="my-rocket"
                    ><br>
                    <span
                      class="is-size-5 is-italic has-text-centered-mobile"
                    >
                      + all-round good egg...
                    </span>
                  </h2>
                  <p
                    class="has-text-weight-normal is-italic"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-easing="ease-in-out-back"
                  >
                    I use web technologies to make things. I love learning and problem solving and I'm a good communicator who enjoys interacting with people. Please browse some of the projects I've been involved in below (more to come soon!) or, <nuxt-link to="resume">
                      check out my résumé
                    </nuxt-link> and
                    <a href="mailto:i@iamjabulani.tech" target="blank">get in touch</a> to find out my availability.
                  </p>
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
