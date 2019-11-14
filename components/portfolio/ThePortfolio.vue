<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary is-folio-thumbnail">
            <p class="title">
              Vertical...xxxx
            </p>
            <p class="subtitle">
              Top tile
            </p>
          </article>
          <article class="tile is-child notification is-primary is-folio-thumbnail">
            <p class="title">
              ...tiles
            </p>
            <p class="subtitle">
              Bottom tile
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary is-folio-thumbnail">
            <div
              class="bg-image is-overlay"
              :style="{ backgroundImage: `url(${img1.src})`}"
            />
            <div class="is-overlay folio-thumbnail-details">
              <p class="title">
                Middle tile
              </p>
              <p class="subtitle">
                With an image
              </p>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <portfolio-article :thumb-image="img1" />
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-primary is-folio-thumbnail">
        <div class="content">
          <p class="title">
            Tall tile
          </p>
          <p class="subtitle">
            With even more content
          </p>
          <div class="content">
          <!-- Content -->
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import PortfolioArticle from '~/components/portfolio/PortfolioArticle.vue'

const firstWealthImg = require('~/assets/images/case_study/first_wealth/the_team.jpg')

export default {
  components: {
    PortfolioArticle
  },
  data () {
    return {
      img1: firstWealthImg
    }
  }

}
</script>

<style lang="scss" scoped>

// article img {
//   transition: all 0.6s;
// }

// article:hover img {
//     transform: scale(1.2);
//     cursor: pointer;
// }

// article p {
  // visibility: hidden;
// }

// .tile.is-gapless {
//   .tile.is-parent {
//     padding: 0;
//   }

//   .tile.is-vertical>.tile.is-child {
//     margin-bottom: 0 !important;
//   }

//   .notification {
//     border-radius: 0;
//   }
// }
</style>
