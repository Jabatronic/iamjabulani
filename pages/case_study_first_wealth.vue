<template>
  <div>
    <the-case-study
      :heading="'First Wealth'"
      :header-image="require('~/assets/images/case_study/first_wealth/first-wealth-overview.jpg')"
      :overview-title="'A wealth of knowledge in financial management...'"
      :overview="'<p>First Wealth is a financial planning service. Their branding speaks a clear message of understated sophistication coupled with knowledge and reliability. I was contracted to create a custom design for a section of their website dedicated to their career development programme.</p>'"

      :folio-image="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-01.jpg')"

      :folio-image-laptop="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/first_wealth/first-wealth-folio-image-mobile.png?size=300')"

      :skills="[
        'PHP, HTML, JavaScript, (S)CSS, Gulp',
        'Wordpress, Advanced Custom Fields',
        'Photoshop'
      ]"

      :folioOutLinkUrl="'https://firstwealth.co.uk/careers/'"

      :folioOutLinkTitle="'https://firstwealth.co.uk/careers/'"

      solution="<p>I built a custom Wordpress template that integrated with their existing (custom built) Wordpress site and utilised Advanced Custom Fields to implement content management functionality specifically for that area of the site.</p>"
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
