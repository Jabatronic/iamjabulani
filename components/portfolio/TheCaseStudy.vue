<template>
  <div class="container content">
    <div class="columns is-centered">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype has-text-centered">
          Case Study: <slot name="heading" />
        </h1>
        <figure class="box">
          <slot name="header-image">
            <img src="https://via.placeholder.com/960x474" alt="">
          </slot>
        </figure>
        <h3>Overview</h3>

        <p class="is-size-5">
          <slot name="overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, a quam saepe soluta repellendus blanditiis modi eius ipsum vel. Sit magnam dolorum nesciunt expedita dignissimos, molestias nihil alias cupiditate! Reiciendis?
          </slot>
        </p>

        <figure class="box">
          <slot name="folio-image-1">
            <img src="https://via.placeholder.com/960x474?text=Folio+Image+1" alt="">
          </slot>
        </figure>
        <h3>What I Did</h3>
        <div class="columns">
          <div class="column">
            <p>
              <slot name="what-i-did">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sed vel similique? Commodi eveniet ipsam explicabo neque voluptas, debitis quod accusantium voluptatum rem autem consectetur perferendis labore iste quia modi.
              </slot>
            </p>
          </div>
          <div class="column">
            <!-- skills component -->
          </div>
        </div>

        <figure class="box">
          <slot name="folio-image-desktop">
            <img src="https://via.placeholder.com/960x474?text=Desktop+Mockup" alt="">
          </slot>
        </figure>
        <figure class="box">
          <slot name="folio-image-mobile">
            <img src="https://via.placeholder.com/960x474?text=Mobile+Mockup" alt="">
          </slot>
        </figure>
        <div class="folio-image-other">
          <slot name="folio-image-other">
            <!-- Any other relevant images -->
          </slot>
        </div>

        <h3>Skills Used</h3>
        <ul>
          <li>PHP, HTML, JavaScript, CSS, Apache</li>
          <li>GSAP (JavaScript) Animation</li>
          <li>Wordpress (including rudimentary plugin development)</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudy',
  components: {},
  props: {

  },
  data () {
    return {
      skills: [
        'PHP, HTML, JavaScript, CSS, Apache',
        'GSAP (JavaScript) Animation',
        'Wordpress (including rudimentary plugin development)',
        'Photoshop'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content figure {
  margin-left: 0;
  margin-right: 0;
}

img {
  border-radius: 3px;
}
</style>
