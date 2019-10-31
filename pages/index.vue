<template>
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
            I am<br><span class="has-font-roboto-slab">Jabulani Robbins</span>
          </div>
          <div class="column is-2-desktop is-2-tablet">
            <figure
              data-aos="zoom-in"
              data-aos-duration="400"
              class="image container is-128x128"
            >
              <img
                class="is-rounded is-me"
                :src="require('~/assets/images/jabulani_robbins.jpg').src"
                :srcSet="require('~/assets/images/jabulani_robbins.jpg').srcSet"
              >
            </figure>
          </div>
          <div class="column is-5-desktop is-7-tablet">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <h1 class="title is-size-2 has-text-teal has-font-roboto-slab is-hidden-mobile">
                  <span>I am Jabulani Robbins</span>
                </h1>
                <h2 class="subtitle has-text-centered-mobile">
                  <b>Web Developer</b>
                </h2>
                <div class="mb-50">
                  <hr class="is-teal">
                  <!--
                    ToDo: Remove this really crappy way to make a responsive margin!! :/
                    -->
                </div>
              </div>
              <p class="intro-text">
                I've been working with web technologies since ????
                I love all things Science &amp; Tech. All things, Art &amp; Design.
                Check out some of the projects I've worked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index',
  components: {
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
