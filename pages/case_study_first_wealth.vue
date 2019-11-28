<template>
  <div>
    <the-case-study
      :heading="'First Wealth'"
      :header-image="require('~/assets/images/case_study/first_wealth/first-wealth-overview.png')"

      :overview="'First Wealth are a personal financial management service. Their branding speaks a clear message of understated sophistication coupled with knowledge and reliability. I was contracted to custom design a section of their website dedicated to their career development programme.'"

      :folio-image="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-01.png')"

      :folio-image-laptop="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-mobile.png?size=500')"

      :skills="[
        'PHP',
        'HTML, JavaScript, (S)CSS',
        'Wordpress, Plugin development, Advanced Custom Fields',
        'Adobe XD, Photoshop'
      ]"

      solution="I built a custom Wordpress template that integrated with their existing (custom built) Wordpress site, and utilised Advanced Custom Fields to implement content management functionality specifically for that area of the site."
    />
  </div>
</template>

<script>
import TheCaseStudy from '~/components/portfolio/TheCaseStudy.vue'
export default {
  components: {
    TheCaseStudy
  }
}
</script>
