<template>
  <div>
    <the-case-study />
    <!-- <the-case-study
      heading="Testing"
      headerImage=""
      overview=""
      folio-image-1=""
      solution=""
      skills=""
      folioImageDesktop=""
      folioImageMobile=""
      folioImageOther=""
    /> -->
  </div>
</template>

<script>
import TheCaseStudy from '~/components/portfolio/TheCaseStudy.vue'
export default {
  components: {
    TheCaseStudy
  },
  computed: {
    caseData () {
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
