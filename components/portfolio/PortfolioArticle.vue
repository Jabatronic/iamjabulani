<template>
  <nuxt-link
    :to="linkTo"
    :style="{ minHeight: `${articleHeight}` }"
    tag="article"
    class="tile is-child notification is-primary is-folio-thumbnail"
  >
    <div
      v-lazy:background-image="thumbImage.src"
      class="bg-image is-overlay"
    />
    <div class="is-overlay folio-thumbnail-details">
      <p class="title is-size-4-mobile">
        {{ itemTitle }}
      </p>
      <p class="subtitle is-size-6 has-text-weight-light">
        {{ itemInfo }}
      </p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'PortfolioArticle',
  props: {
    linkTo: {
      type: String,
      default: '/'
    },
    articleHeight: {
      type: String,
      default: '150px'
    },
    thumbImage: {
      type: Object,
      default: require('~/assets/images/placeholder.png')
    },
    itemTitle: {
      type: String,
      default: 'Item Title'
    },
    itemInfo: {
      type: String,
      default: 'Item info'
    }
  },
  methods: {
    goToRoute (link) {
      this.$router.push(link)
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
    @include mobile {
      min-height: 15rem !important;
    }

  & .bg-image {
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 0.6s;
    padding: 20px;
  }
  &:hover .bg-image {
    opacity: .3;
  }

  & .folio-thumbnail-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: $radius;
    background:rgba($primary, .7);
    margin: 0 important;
    @include mobile {
      opacity: 0;
    }
    opacity: 0;
    transition: all .6s;

    & .title {
      font-family: $title-font;
      text-align: center;
      @include mobile {
        border: .2rem solid lighten($primary, 10%);
        border-radius: .5rem;
        margin: 1rem;
        margin-bottom: 2rem;
        padding: 1rem .5rem;
        transition: all .07s ease;
        width: auto;
        color: white;
        // background: rgba(0,0,0,0.3);
        background: rgba($primary, .7);
      }
    }
  }

  &:hover {
    .folio-thumbnail-details {
      opacity: 1;
    }
  }
}
</style>
