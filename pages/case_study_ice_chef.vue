<template>
  <div>
    <the-case-study
      :heading="'The Ice Chef'"

      :header-image="require('~/assets/images/case_study/the_ice_chef/ice-chef-overview.jpg')"

      :overview-title="'Deliciously different...'"

      :overview="`<p>The Ice Chef creates rolled ice cream desserts inspired by Thai street food. Lindsay - a single mum of one - started the business after a life-changing trip to Thailand with her young daughter.</p><p>Her business caters for events of all sizes, including but not limited to: weddings, birthdays &amp; kids' parties; corporate events &amp; festivals.</p>`"

      :folio-image="require('~/assets/images/case_study/the_ice_chef/the-ce-chef-folio-image-01.jpg')"

      :solution="`<p>Budget (and therefore, time) was tight, so I used my favourite Wordpress theme framework, Genesis, and a premium theme to get us up and running quickly. Sugary pastels and typography evocative of old sweet shop signage set the tone.</p>`"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'Wordpress (Genesis)',
        'Photoshop'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/the_ice_chef/home-page-hero-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/the_ice_chef/mobile-01.png?size=300')"

      :folioOutLinkUrl="'https://theicechef.co.uk/'"

      :folioOutLinkTitle="'https://theicechef.co.uk/'"
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
