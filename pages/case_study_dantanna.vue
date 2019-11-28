<template>
  <div>
    <the-case-study
      :header-image="require('~/assets/images/case_study/dantanna/dantanna-overview.jpg')"

      :folio-image="require('~/assets/images/case_study/dantanna/dantanna-folio-image.jpg')"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/dantanna/dantanna-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/dantanna/dantanna-folio-image-mobile.png?size=500')"

      heading="Dantanna Beatz"
      overview="Dantanna is a Birmingham based music producer specialising in full-band live hip-hop. The personnel of his projects is fluid with members changing over time and for different projects. Their performances are raucous, frenetic, and unapologetically “DIY” in aesthetic. He required a website that he could update himself, to back up his already active social media presence in a way that allowed more stylistic agency."
      solution="I built a onepage, mobile friendly site, backed by a Wordpress CMS. Bright colours with a DIY aesthetic and a lively JavaScript animation in the hero section on loading."
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
