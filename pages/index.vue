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
          <div class="column is-5-desktop is-7-tablet">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <h1 class="title is-size-2 has-text-teal has-font-roboto-slab is-hidden-mobile">
                  <span>I am Jabulani Robbins</span>
                </h1>
                <h2 class="title is-size-4 has-text-centered-mobile">
                  <b>Creative Web Developer &amp; Critical Thinker</b>
                </h2>
                <hr class="is-teal">
                <div class="mb-30">
                  <!--
                    ToDo: Remove this really crappy way to make a responsive margin!! :/
                    -->
                </div>
              </div>
              <div class="content">
                <p class="intro-text">
                  I made my first website in 2000. Back in the days when table-based layouts, slices, and keyword stuffing was the norm!
                </p>

                <p>
                  Needless to say, things have evolved somewhat since then and I am ❤️ing modern web development.
                </p>
              </div>
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
