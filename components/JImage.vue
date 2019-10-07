<template>
  <img :srcset="imgUrl.srcSet" alt="">
</template>

<script>
const defImage = require('~/assets/images/placeholder.png')
export default {
  name: 'JImage',
  props: {
    imgUrl: {
      type: String,
      default: defImage
    }
  }
}
</script>
