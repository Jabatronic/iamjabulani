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
      <portfolio-article
        :thumb-image="img5"
        item-title="The Little Big Programme"
        item-info="Laravel, PHP, HTML5, CSS3"
      />
    </div>
  </div>
</template>
<script>
import PortfolioArticle from '~/components/portfolio/PortfolioArticle.vue'

const dantannaImg = require('~/assets/images/dantanna_beatz_front.jpg?size=368')
const firstWealthImg = require('~/assets/images/first_wealth_front.png?size=368')
const prosperityImg = require('~/assets/images/prosperity_health_front.jpg?size=600')
const littleBigProgImg = require('~/assets/images/the_little_big_programme_front.png?size=760')
const iceChefImg = require('~/assets/images/the_ice_chef_front.png?size=500')

export default {
  components: {
    PortfolioArticle
  },
  data () {
    return {
      img1: firstWealthImg,
      img2: dantannaImg,
      img3: prosperityImg,
      img4: littleBigProgImg,
      img5: iceChefImg
    }
  }

}
</script>
