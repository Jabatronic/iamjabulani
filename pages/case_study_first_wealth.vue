<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: First Wealth
        </h1>
        <h3>Overview</h3>
        <p>
          First Wealth are a personal financial management service. Their branding speaks a clear message of understated sophistication coupled with knowledge and reliability.
        </p>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/first_wealth/the_team.jpg').src" :srcSet="require('~/assets/images/case_study/first_wealth/the_team.jpg').srcSet">
        </figure>
        <p>I was contracted to custom design a section of their website dedicated to their career development programme.</p>

        <h3>What I did</h3>
        <p>I built a custom Wordpress template that integrated with their existing (custom built) Wordpress site, and utilised Advanced Custom Fields to implement content management functionality specifically for that area of the site.</p>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/first_wealth/top_section.png').src" :srcSet="require('~/assets/images/case_study/first_wealth/top_section.png').srcSet">
        </figure>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/first_wealth/top_section.png').src" :srcSet="require('~/assets/images/case_study/first_wealth/top_section.png').srcSet">
        </figure>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/first_wealth/second_section.png').src" :srcSet="require('~/assets/images/case_study/first_wealth/second_section.png').srcSet">
        </figure>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/first_wealth/third_section.png').src" :srcSet="require('~/assets/images/case_study/first_wealth/third_section.png').srcSet">
        </figure>

        <!-- MORE INFO HERE -->
        <h3>Skills Used</h3>
        <ul>
          <li>PHP</li>
          <li>HTML, JavaScript, (S)CSS</li>
          <li>Wordpress, Plugin development, Advanced Custom Fields</li>
          <li>Adobe XD, Photoshop</li>
        </ul>
      </div>
      <div class="column is-3">
        <!-- Start Sidebar -->
        <the-sidebar />
        <!-- End Sidebar -->
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from '~/components/sidebar/TheSidebar.vue'

export default {
  name: 'CaseStudyFirstWealth',
  components: {
    TheSidebar
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
