<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: Dantanna Beatz
        </h1>
        <figure>
          <img :src="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').src" :srcSet="require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg').srcSet">
        </figure>
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
}
img {
  border-radius: 3px;
}
</style>
