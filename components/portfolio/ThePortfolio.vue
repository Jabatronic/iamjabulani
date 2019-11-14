<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <portfolio-article :thumb-image="img1" />
          <portfolio-article :thumb-image="img2" />
        </div>
        <div class="tile is-parent">
          <portfolio-article :thumb-image="img3" />
        </div>
      </div>
      <div class="tile is-parent">
        <portfolio-article :thumb-image="img4" />
      </div>
    </div>
    <div class="tile is-parent">
      <portfolio-article :thumb-image="img5" />
    </div>
  </div>
</template>
<script>
import PortfolioArticle from '~/components/portfolio/PortfolioArticle.vue'

const firstWealthImg = require('~/assets/images/case_study/first_wealth/the_team.jpg?size=368')
const dantannaImg = require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg?size=368')
const iceChefImg = require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg?size=500')
const prosperityImg = require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg?size=368')
const littleBigProgImg = require('~/assets/images/case_study/dantanna/dantanna_sections_overview.jpg?size=368')

export default {
  components: {
    PortfolioArticle
  },
  data () {
    return {
      img1: firstWealthImg,
      img2: dantannaImg,
      img3: iceChefImg,
      img4: prosperityImg,
      img5: littleBigProgImg
    }
  }

}
</script>
