<template>
  <div>
    <the-case-study
      :heading="'The Little Big Programme'"

      :header-image="require('~/assets/images/case_study/little_big_programme/edas.png')"

      :overview="`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis ipsam, laborum iste harum consequatur accusamus vero, quod eaque reprehenderit, illo vel nulla fugit laudantium minus atque soluta eius quas?</p>`"

      :folio-image="require('~/assets/images/case_study/little_big_programme/training-image.png')"

      :solution="`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis ipsam, laborum iste harum consequatur accusamus vero, quod eaque reprehenderit, illo vel nulla fugit laudantium minus atque soluta eius quas?</p>`"

      :skills="[
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-01-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-02-laptop.png')"

      :folioImageExtra="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-03-laptop.png')"
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
