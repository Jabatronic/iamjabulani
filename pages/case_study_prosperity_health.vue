<template>
  <div>
    <the-case-study
      :heading="'Prosperity Health'"

      :header-image="require('~/assets/images/case_study/dantanna/dantanna-overview.jpg')"

      :overview="'Healthy body, Healthy mind.'"

      :folio-image="require('~/assets/images/case_study/dantanna/dantanna-folio-image.jpg')"

      :solution="`<p>Initially I spent a good deal of time iterating designs in Adobe XD, a process I found very rewarding. During this time my relationship with the company and their products developed and continues to do so.</p>
      <p>Accomplishing our goals within the budget and timeframe neccessary was a critical factor.</p>
      <p>I started with a premium Genesis theme and made many modifications and customisations to . `"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]"

      :folio-image-desktop="require('~/assets/images/case_study/dantanna/dantanna-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/dantanna/dantanna-folio-image-mobile.png?size=500')"
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
