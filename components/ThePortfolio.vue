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
        <article
          class="tile is-child notification is-primary is-folio-thumbnail"
        >
          <p class="title">
            Wide tile
          </p>
          <p class="subtitle">
            Aligned with the right tile
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum pariatur ullam, mollitia delectus suscipit debitis quis accusamus dignissimos! Deserunt pariatur praesentium totam. Rerum rem quis repellat mollitia molestiae consequatur accusamus?
          </p>
          <div class="content">
          <!-- Content -->
          </div>
        </article>
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
const firstWealthImg = require('~/assets/images/case_study/first_wealth/the_team.jpg')

export default {
  data () {
    return {
      img1: firstWealthImg
    }
  }
}
</script>

<style lang="scss" scoped>
/* Folio Tiles */
.tile .is-folio-thumbnail {
  overflow: hidden;

  & .bg-image {
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.6s;
    padding: 20px;
  }
  &:hover .bg-image {
    opacity: .4;
  }

  & .folio-thumbnail-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: $radius;
    margin: 0 important;
    opacity: 0;
    transition: all .6s;

    & .title {
      font-family: $roboto-slab;
      text-align: center;
    }
  }

  &:hover {
    .folio-thumbnail-details {
      opacity: 1;
    }
  }
}

article img {
  transition: all 0.6s;
}

article:hover img {
    transform: scale(1.2);
    cursor: pointer;
}

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
