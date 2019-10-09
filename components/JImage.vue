<template>
  <picture>
    <source :srcset="imgUrl.webp" type="image/webp">
    <source :srcset="imgUrl.fallback">
    <img :src="imgUrl.source" :alt="imgUrl.alt">
  </picture>
</template>

<script>
const defImage = {
  webp: require('~/assets/images/placeholder.png?webp'),
  fallback: require('~/assets/images/placeholder.png'),
  source: require('~/assets/images/placeholder.png'),
  alt: 'Image not available'
}

export default {
  name: 'JImage',
  props: {
    imgUrl: {
      type: Object,
      default: () => defImage
    }
  }
}
</script>
