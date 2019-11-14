<template>
  <article
    class="tile is-child notification is-primary is-folio-thumbnail"
    :style="{ height: `${thumbImage.height}.px` }"
  >
    <div
      class="bg-image is-overlay"
      :style="{ backgroundImage: `url(${thumbImage.src})`}"
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
</template>
<script>
export default {
  name: 'PortfolioArticle',
  props: {
    thumbImage: {
      type: String,
      default: '~/assets/images/placeholder.png'
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
</style>
