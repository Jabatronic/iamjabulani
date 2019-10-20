<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: EDAS
        </h1>
        <h3>Overview</h3>
        <p>
          EDAS provides support to adults and young people affected by alcohol, illicit substances and over the counter or prescribed medication misuse across Dorset.
        </p>
        <h3>What I did</h3>
        <p>I worked as website manager, taking care of general maintenance, security, monitoring performance, designing and implementing new elements, and writing articles for the site. In addition to this I was responsible for liaising with the the hosting company and graphic design agency that held the main contract for the site.</p>
        <p>I did this as a voluntary role for one day per week as a way of making a contribution to my local community.</p>
        <figure class="box">
          <img :src="require('~/assets/images/case_study/edas/home_page.png').src" :srcSet="require('~/assets/images/case_study/edas/home_page.png').srcSet">
        </figure>
        <!-- MORE INFO HERE -->
        <h3>Skills Used</h3>
        <ul>
          <li>HTML, JavaScript, CSS</li>
          <li>Concrete CMS</li>
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
  name: 'CaseStudyEdas',
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
