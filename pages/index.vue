<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-7">
        <figure class="image is-128x128 is-marginless">
          <img class=" image is-rounded" src="~/assets/images/jabulani_robbins.jpg">
        </figure>
        <h1 class="title is-2 jtron-logotype">
          <span class="first-name">M Jabulani</span>
          <span class="second-name">Robbins</span>
          <span class="subtitle is-block">Web Development Portfolio &amp; Résumé</span>
        </h1>
        <div>
          <p>
            I am a web developer/designer with ability, knowledge, and experience across the
            <a href="#">full-stack</a> but weighted towards the
            <a href="#">front-end</a>.
          </p>
          <p>
            <a href="#">HTML5</a>,
            <a href="#">CSS3</a>, and
            <a href="#">JavaScript</a> are part of my everyday vocabulary and custom
            <a href="#">Wordpress</a> sites make up a large part of my <a href="#">commercial
              experience</a>.
          </p>
          <p />
        </div>
      </div>
      <div class="column is-5">
        <!-- Start Sidebar Widgets-->
        <recent-works />
        <!-- End Sidebar Widgets -->
      </div>
    </div>
  </div>
</template>

<script>
import RecentWorks from '~/components/sidebar/RecentWorks.vue'

export default {
  name: 'Index',
  components: {
    RecentWorks
  }
}
</script>
