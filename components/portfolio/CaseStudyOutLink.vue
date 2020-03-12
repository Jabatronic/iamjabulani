<template>
  <div class="external-link">
    <a :href="linkUrl" target="_blank">
      {{ linkTitle }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    linkTitle: {
      type: String,
      default: 'Add a link title in the prop'
    },
    linkUrl: {
      type: String,
      default: 'add a valid value for "linkUrl" prop'
    }
  }
}
</script>

<style lang="scss">
  .external-link {
    text-align: center;
    margin-bottom: $gap;
  }
</style>
