<template>
  <div>
    <the-case-study
      :heading="'Dantanna Beatz'"

      :header-image="require('~/assets/images/case_study/dantanna/dantanna-overview.jpg')"

      :overview-title="'Bringing the party to the people...'"

      :overview="`<p>Dantanna is a Birmingham-based music producer specialising in full-band live hip-hop. The personnel of his projects is fluid with members changing over time and for different projects. Their performances are raucous, frenetic, and unapologetically “DIY” in aesthetic. He required a website that he could update himself, to back up his already active social media presence in a way that allowed more stylistic agency.</p>`"

      :folio-image="require('~/assets/images/case_study/dantanna/dantanna-folio-image.jpg')"

      :solution="`<p>I built a one-page, mobile-friendly site, backed by a Wordpress CMS. Bright colours with a DIY aesthetic and a lively JavaScript animation in the hero section on loading.</p>`"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/dantanna/dantanna-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/dantanna/dantanna-folio-image-mobile.png?size=300')"

      :folioOutLinkUrl="'https://dantanna.co.uk/'"

      :folioOutLinkTitle="'https://dantanna.co.uk/'"
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
