<template>
  <div>
    <the-case-study
      :skills="skills"
    >
      <template slot="heading">
        DantannaBeatz
      </template>
      <template slot="header-image">
        <!-- Image goes here -->
      </template>
      <template slot="overview">
        <!-- Brief overview of the client, brand, product, etc -->
      </template>
      <template slot="folio-image-1">
        <!-- Brief overview of the client, brand, product, etc -->
      </template>
      <template slot="what-i-did">
        <!-- Outline of how the brief was addressed -->
      </template>
      <template slot="folio-image-desktop">
        <!-- Desktop Mockup -->
      </template>
      <template slot="folio-image-mobile">
        <!-- Mobile mockup -->
      </template>
      <template slot="folio-image-other">
        <!--
              Any other relevant images
              possible formats:
              <picture>, <figure>, <img>, etc
        -->
      </template>
    </the-case-study>
  </div>
</template>

<script>
import TheCaseStudy from '~/components/portfolio/TheCaseStudy.vue'
export default {
  components: {
    TheCaseStudy
  },
  computed: {
    skills () {
      return [
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]
    }
  }
}
</script>
