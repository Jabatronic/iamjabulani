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
              <h3>Skills Used</h3>
              <ul>
                <li>PHP, HTML, JavaScript, CSS, Apache</li>
                <li>GSAP (Javascript) Animation</li>
                <li>Wordpress (including rudimentary plugin development)</li>
                <li>Photoshop</li>
              </ul>
            </div>

            <div class="column is-half">
              <h3>Scope &amp; Constraints</h3>
              <p>Dantanna needed to be able to make simple content updates to the site by non-developer-editors. Budget was also a constraint at this early stage of their development.</p>
            </div>
          </div>
          <!-- End Introduction -->

          <!-- Start Image(s) -->
          <div>
            <img src="~assets/images/dantanna_full-page_full-size.png" alt="">
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

export default {
  name: 'CaseStudy',
  components: {
    RecentWorks
  }
}
</script>

<style lang="scss">
.thumb-gallery {
  background: $teal;
}
</style>
