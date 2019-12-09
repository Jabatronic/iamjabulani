<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <portfolio-article
            :thumb-image="img1"
            link-to="case_study_first_wealth"
            item-title="First Wealth"
            item-info="Wordpress, Advanced Custom Fields, HTML5, CSS3 (Sass)"
          />
          <portfolio-article
            :thumb-image="img2"
            link-to="case_study_dantanna"
            item-title="Dantanna Beatz"
            item-info="Wordpress, HTML5, CSS3, Javascript Animation (GSAP), Graphic design (Photoshop)"
          />
        </div>
        <div class="tile is-parent">
          <portfolio-article
            :thumb-image="img3"
            link-to="case_study_prosperity_health"
            item-title="Prosperity Vegan Coffee &amp; CBD Lounge"
            item-info="Wordpress (Genesis), HTML5, CSS3, Javascript, Adobe XD"
          />
        </div>
      </div>
      <div class="tile is-parent">
        <portfolio-article
          :thumb-image="img4"
          link-to="case_study_little_big_programme"
          item-title="The Little Big Programme"
          item-info="Laravel, HTML5, Bootstrap, Javascript(Animation, jquery) CSS3"
        />
      </div>
    </div>
    <div class="tile is-parent">
      <portfolio-article
        :thumb-image="img5"
        link-to="case_study_ice_chef"
        item-title="The Ice Chef"
        item-info="Wordpress (Genesis), HTML5, CSS3"
      />
    </div>
  </div>
</template>
<script>
import PortfolioArticle from '~/components/portfolio/PortfolioArticle.vue'

const firstWealthImg = require('~/assets/images/first_wealth_front_q44.jpg?size=760')
const dantannaImg = require('~/assets/images/dantanna_beatz_front.png?size=760')
const prosperityImg = require('~/assets/images/prosperity_health_front.jpg?size=600')
const littleBigProgImg = require('~/assets/images/the_little_big_programme_front.jpg?size=760')
const iceChefImg = require('~/assets/images/the_ice_chef_front.jpg?size=500')

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
