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

      :folio-image-desktop="require('~/assets/images/case_study/dantanna/dantanna-folio-image-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/dantanna/dantanna-folio-image-mobile.png?size=500')"

      heading="The Ice Chef"

      overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis ipsam, laborum iste harum consequatur accusamus vero, quod eaque reprehenderit, illo vel nulla fugit laudantium minus atque soluta eius quas?"
      solution="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis ipsam, laborum iste harum consequatur accusamus vero, quod eaque reprehenderit, illo vel nulla fugit laudantium minus atque soluta eius quas?"
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
