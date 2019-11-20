<template>
  <div class="container content case-study">
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
        <p class="is-size-6">
          <slot name="overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, a quam saepe soluta repellendus blanditiis modi eius ipsum vel. Sit magnam dolorum nesciunt expedita dignissimos, molestias nihil alias cupiditate! Reiciendis?
          </slot>
        </p>

        <figure class="box">
          <slot name="folio-image-1">
            <img src="https://via.placeholder.com/960x474?text=Folio+Image+1" alt="">
          </slot>
        </figure>
        <h3>Solution</h3>
        <div class="columns">
          <div class="column">
            <p>
              <slot name="solution">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sed vel similique? Commodi eveniet ipsam explicabo neque voluptas, debitis quod accusantium voluptatum rem autem consectetur perferendis labore iste quia modi.
              </slot>
            </p>
          </div>
          <div class="column">
            <div class="skills-component">
              <!-- skills component -->
              <ul>
                <li
                  v-for="(item, index) in skills"
                  :key="index"
                  class="is-size-6"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
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
        <!--
          TODO:
          A final item??
          Call to action, arrows to next and previous project, etc
         -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudy',
  components: {},
  props: {
    skills: {
      type: Array,
      default: () => ['Add skills here!']
    }
  }
}
</script>

<style lang="scss">
.case-study {
  & .li, p {
    font-size: 1rem;
  }
}
.content figure {
  margin-left: 0;
  margin-right: 0;
}

img {
  border-radius: 3px;
}

div.skills-component {
  border-left: 3px solid $primary;

  & ul {
    margin-top: 0;
  }

  & ul > li {
    list-style-type: square;
    color: $primary;
  }
}
</style>
