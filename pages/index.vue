<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-2">
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
          <div class="column is-5">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 class="title is-size-2">
                <span class="has-text-teal has-font-roboto-slab">I am Jabulani Robbins</span>
              </h1>
              <h2 class="subtitle">
                <b>Web Developer</b>
              </h2>
              <p>
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
// import RecentWorks from '~/components/sidebar/RecentWorks.vue'

export default {
  name: 'Index',
  components: {
    // RecentWorks
  }
}
</script>

<style lang="scss">
  // div {
  //   border: 1px solid red;
  // }
  p.intro-text {
    width: 100%;
  }

  img.is-me {
    border: 1px solid $grey-lighter;
  }
</style>
