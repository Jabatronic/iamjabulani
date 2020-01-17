<template>
  <div>
    <the-case-study
      :heading="'Prosperity CBD & Vegan Coffee Lounge'"

      :header-image="require('~/assets/images/case_study/prosperity_health/prosperity-overview.jpg')"
      :overview-title="'Healthy body, Healthy mind...'"
      :overview="`<p>Prosperity CBD & Vegan Coffee Lounge is a plant-based alternative health startup specialising in CBD products. They are dedicated to sourcing and sharing the best products produced using the cleanest safest methods. They are even developing their own-brand product range. They needed a website that would initially serve as contact/brochure site but be capable of extending in functionality as they grow (ecommerce capability, membership system, hybrid mobile app/PWA, etc.</p>`"

      :folio-image="require('~/assets/images/case_study/prosperity_health/folio-image-lounge.jpg')"

      :solution="`<p>Initially, I spent a good deal of time iterating designs, starting on paper and later using digital wireframing and prototyping tools. This was a process I found very rewarding. During this time, my relationship with the company developed and continues to do so.</p>
      <p>Accomplishing our goals within a limited budget was a critical factor.</p>
      <p>I used Genesis theme framework to achieve the desired look, feel and functionality.</p> <p>I also implemented full ecommerce capability using Woocommerce, in readiness for when their online product range launches</p>`"

      :skills="[
        'Wordpress, Woocommerce',
        'PHP, HTML, JavaScript, CSS, Apache',
        'Photoshop, Illustrator'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/prosperity_health/prosperity-health-folio-image-01-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/prosperity_health/prosperity-health-folio-image-mobile.png?size=300')"

      :folioOutLinkUrl="'https://www.prosperity.health/'"

      :folioOutLinkTitle="'https://www.prosperity.health/'"
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
