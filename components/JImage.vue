<template>
  <picture>
    <source :srcset="imgUrl.webp" type="image/webp">
    <source :srcset="imgUrl.fallback">
    <img :src="imgUrl.source" :alt="imgUrl.alt">
  </picture>
  <!-- Example Usage
<j-image
  :img-url=" {
    webp: require('~/assets/images/dantanna_full-page_full-size.png?webp'),
    fallback: require('~/assets/images/dantanna_full-page_full-size.png'),
    source: require('~/assets/images/dantanna_full-page_full-size.png'),
    alt: 'The DantannaBeatz Homepage',
    class: 'j-image'
  }"
/> -->
</template>

<script>
const defImage = {
  webp: require('~/assets/images/placeholder.png?webp'),
  fallback: require('~/assets/images/placeholder.png').srcSet,
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
