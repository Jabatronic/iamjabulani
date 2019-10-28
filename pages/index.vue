<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-2">
            <figure class="image container is-128x128">
              <img
                class="is-rounded"
                :src="require('~/assets/images/jabulani_robbins.jpg').src"
                :srcSet="require('~/assets/images/jabulani_robbins.jpg').srcSet"
              >
            </figure>
          </div>
          <div class="column is-5">
            <h1 class="title is-size-2">
              <span class="has-text-teal has-font-roboto-slab">Jabulani Robbins</span>
            </h1>
            <h2 class="subtitle">
              <b>Web Development Portfolio &amp; Resume</b>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dicta voluptatibus, omnis fuga velit itaque, nihil nemo laboriosam, odit voluptas fugiat dignissimos commodi hic quod? Ullam alias rerum error. Ducimus?</p>
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
</style>
