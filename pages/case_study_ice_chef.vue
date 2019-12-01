<template>
  <div>
    <the-case-study
      :heading="'The Ice Chef'"

      :header-image="require('~/assets/images/case_study/the_ice_chef/ice-chef-overview.jpg')"

      :overview-title="'Deliciously different...'"

      :overview="`<p>
      The Ice Chef creates rolled ice cream desserts inspired by Thai street food. Lindsay - A single mum of one - started the business after a life changing trip to Thailand with her young daughter.</p><p>Her business caters for events of all sizes, including but not limited to: Weddings; Birthdays &amp; Kids Parties; Corporate events &amp; festivals. </p>`"

      :folio-image="require('~/assets/images/case_study/the_ice_chef/the-ce-chef-folio-image-01.png')"

      :solution="`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis ipsam, laborum iste harum consequatur accusamus vero, quod eaque reprehenderit, illo vel nulla fugit laudantium minus atque soluta eius quas?</p>`"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'Wordpress (Genesis)',
        'Photoshop'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/the_ice_chef/home-page-hero-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/the_ice_chef/mobile-01.png?size=500')"
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
