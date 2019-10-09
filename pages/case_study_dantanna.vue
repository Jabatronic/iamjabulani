<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: Dantanna Beatz
        </h1>

        <div>
          <!-- Start Introduction -->
          <h3>Overview</h3>
          <p class="pb-20">
            Dantanna Beatz is a music production startup specialising in full-band live hip-hop. Their performances are raucous, frenetic, and unapologetically “DIY” in aesthetic. They required a website to back up their already active social media presence with a communication media where they had more control over visual and audio elements.
          </p>

          <div class="columns">
            <div class="column is-half">
              <h3>The Solution</h3>
              <p>A onepage, mobile friendly site, backed by a Wordpress CMS. Bright colours with a DIY aesthetic and a lively JavaScript animation in the hero section on loading.</p>
            </div>

            <div class="column is-half">
              <h3>Skills Used</h3>
              <ul>
                <li>PHP, HTML, JavaScript, CSS, Apache</li>
                <li>GSAP (JavaScript) Animation</li>
                <li>Wordpress (including rudimentary plugin development)</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
          <!-- End Introduction -->

          <!-- Start Image(s) -->
          <div>
            <j-image
              :img-url=" {
                webp: require('~/assets/images/dantanna_full-page_full-size.png?webp'),
                fallback: require('~/assets/images/dantanna_full-page_full-size.png'),
                source: require('~/assets/images/dantanna_full-page_full-size.png'),
                alt: 'The DantannaBeatz Homepage'
              }"
            />
          </div>
          <!-- End image(s) -->
        </div>
      </div>
      <div class="column is-3">
        <!-- Start Sidebar -->
        <recent-works />
        <!-- End Sidebar -->
      </div>
    </div>
  </div>
</template>

<script>
import RecentWorks from '~/components/sidebar/RecentWorks.vue'
import JImage from '~/components/JImage'

export default {
  name: 'CaseStudy',
  components: {
    RecentWorks,
    JImage
  }
}
</script>

<style lang="scss">
.thumb-gallery {
  background: $teal;
}
</style>
