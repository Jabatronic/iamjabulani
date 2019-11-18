<template>
  <nuxt-link
    tag="article"
    :to="linkTo"
    class="tile is-child notification is-primary is-folio-thumbnail"
    :style="{ minHeight: `${articleHeight}` }"
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
    opacity: .3;
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
      @include mobile {
        border: .2rem solid $primary;
        border-radius: .5rem;
        margin: 1rem;
        margin-bottom: 2rem;
        // font-size: 1.5rem;
        padding: 1rem .5rem;
        transition: all .07s ease;
        width: auto;
        color: white;
        background: rgba(0,0,0,0.3);
        // text-shadow: 0 0 .5rem black;
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
