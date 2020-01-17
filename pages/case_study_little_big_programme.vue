<template>
  <div>
    <the-case-study
      :heading="'The Little Big Programme (EDAS)'"

      :header-image="require('~/assets/images/case_study/little_big_programme/edas.png')"

      :overview-title="'Grow, Progress, Achieve, Empower'"

      :overview="`<p>EDAS is an award-winning charity whose goal is to empower people through education and support. Their philosophy is an inclusive one with their course participants consisting of people from all walks of life including both those who have joined the course on their path to recovery from substance misuse as well as professional practitioners in the field of substance misuse. They offer a range of courses from informal uncertificated through to Masters level.</p>
      <p>EDAS developed a paper-based therapeutic tool for use with young people in addiction therapy &mdash; <i>The Little Big Programme</i> &mdash; It has page-by-page exercises that promote self-awareness and understanding of situations, behaviours, patterns, and relationships that affect, or are affected by, substance misuse. They approached me, requiring a means to have an online,  digital, fully interactive version of the exercises as part of a broader commitment to digital engagement and support strategies</p>`"

      :folio-image="require('~/assets/images/case_study/little_big_programme/training-image.jpg')"

      :solution="`<p>I recommended building a working prototype as a proof of concept which could then be scaled. The system should (initially, at least) look very similar to the paper-based parent to make the transition between the two as smooth as possible for participants already using the paper booklet. It would require:</p>
        <ul>
          <li>a sign-up and login system for participants,</li>
          <li>a login system and admin panel for staff,</li>
          <li>user progress to be saved in a database</li>
        </ul>
        <p>After researching the best-of-breed potential solutions, I settled on HTML, CSS and Javascript for the front-end and Laravel for business logic and database handling due to its clean database abstraction API and MVC architecture.</p><p>The client was very happy with the results and as such implemented it as part of their range of therapeutic tools.</p>
        <p>The highlights of working on this project were:</p>
        <ul>
          <li>Working with a charity on something intended to improve people's lives</li>
          <li>Learning Laravel framework</li>
          <li>Deepening my knowledge of CSS3 in finding ways to replicate the shapes and layouts from the booklet. I would like to attempt this using SVG format in future.</li>
          <li>Learning to use GSAP Javascript to create animations</li>
        </ul>`"
      :skills="[
        'Laravel Framework',
        'PHP, HTML5, Javascript, CSS3, Apache',
        'GSAP (JavaScript) Animation',
      ]"

      :folio-image-laptop="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-01-laptop.png')"

      :folio-image-mobile="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-02-laptop.png')"

      :folioImageExtra="require('~/assets/images/case_study/little_big_programme/little-big-programme-folio-image-03-laptop.png')"

      :folioOutLinkUrl="'https://littlebigprogramme.edasuk.org/'"

      :folioOutLinkTitle="'https://littlebigprogramme.edasuk.org/'"
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
