<template>
  <article
    class="tile is-child notification is-primary is-folio-thumbnail"
    :style="{ minHeight: `${thumbImage.height}.px` }"
  >
    <div
      class="bg-image is-overlay"
      :style="{ backgroundImage: `url(${thumbImage.src})`}"
    />
    <div class="is-overlay folio-thumbnail-details">
      <p class="title">
        {{ itemTitle }}
      </p>
      <p class="subtitle">
        {{ itemInfo }}
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
    },
    itemTitle: {
      type: String,
      default: 'Item Title'
    },
    itemInfo: {
      type: String,
      default: '{ Item info }'
    }
  }
}
</script>

<style lang="scss">
/**
 * TODO:
 * refactor this hot mess!
 */

.tile .is-folio-thumbnail {
  overflow: hidden;
  cursor: pointer;

  & .bg-image {
    @include mobile {
      opacity: .4;
    }
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
    @include mobile {
      opacity: 1;
    }
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
