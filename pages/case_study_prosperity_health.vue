<template>
  <div>
    <the-case-study
      :heading="'Prosperity CBD & Vegan Coffee Lounge'"

      :header-image="require('~/assets/images/case_study/prosperity_health/prosperity-overview.jpg')"
      :overview-title="'Deliciously different...'"
      :overview="`<p>Healthy body, Healthy mind. Prosperity CBD & Vegan Coffee Lounge is a plant-based alternative health startup specialising in CBD products. They are dedicated to sourcing and sharing the best products produced using the cleanest safest methods. They are even developing their own breand product range. They needed a website that would initially serve as contact/brochure site but be capable of extending to other functionality as they grow (ecommerce capability, membership system, mobile app, etc.</p>`"

      :folio-image="require('~/assets/images/case_study/prosperity_health/folio-image-lounge.png')"

      :solution="`<p>Initially I spent a good deal of time iterating designs initially using paper and later using digital wireframing and prototyping tools, a process I found very rewarding. During this time, my relationship with the company developed and continues to do so.</p>
      <p>Accomplishing our goals within a limited budget was a critical factor.</p>
      <p>I started with a premium Genesis theme and made modifications to back and front end to achieve the desired look and feel.</p> I also implemented full ecommerce capability using Woocommerce, in preparation for the client's online product range launches`"

      :skills="[
        'Wordpress, Woocommerce',
        'PHP, HTML, JavaScript, CSS, Apache',
        'Photoshop, Illustrator'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/prosperity_health/prosperity-health-folio-image-01-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/prosperity_health/prosperity-health-folio-image-mobile.png?size=500')"
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
