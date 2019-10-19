<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: Dantanna Beatz
        </h1>
        <h3>Overview</h3>
        <p>
          DantannaBeatz is the pseudonymn of a Birmingham based music producer specialising in full-band live hip-hop. The personell oshis projects is fluid with members chenging over time an for different projects. Their performances are raucous, frenetic, and unapologetically “DIY” in aesthetic. He required a website that he could update himself, to back up his already active social media presence.
        </p>
        <figure>
          <img :src="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').src" :srcSet="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').srcSet">
        </figure>
        <figure>
          <img :src="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').src" :srcSet="require('~/assets/images/case_study/dantanna/dantanna_sections_overview_2.jpg').srcSet">
        </figure>
        <h3>What I Did</h3>
        <p>I built a onepage, mobile friendly site, backed by a Wordpress CMS. Bright colours with a DIY aesthetic and a lively JavaScript animation in the hero section on loading.</p>
        <figure>
          <img :src="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').src" :srcSet="require('~/assets/images/case_study/dantanna/hero.jpg').srcSet">
        </figure>
        <!-- MORE INFO HERE -->
        <h3>The Focus</h3>
        <p>I tried to keep the focus on the man himself (Dantanna!). </p>
        <figure>
          <img :src="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').src" :srcSet="require('~/assets/images/case_study/dantanna/first_section.jpg').srcSet">
        </figure>
        <!-- MORE INFO HERE -->
        <h3>Skills Used</h3>
        <ul>
          <li>PHP, HTML, JavaScript, CSS, Apache</li>
          <li>GSAP (JavaScript) Animation</li>
          <li>Wordpress (including rudimentary plugin development)</li>
          <li>Photoshop</li>
        </ul>
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

<style lang="scss" scoped>
.content figure {
  margin-left: 0;
  margin-right: 0;
}
img {
  border-radius: 3px;
}
</style>
