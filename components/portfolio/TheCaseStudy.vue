<template>
  <div class="container content case-study">
    <div class="columns is-centered">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype has-text-centered">
          Case Study: {{ heading }}
        </h1>
        <figure class="box">
          <img :src="headerImage" alt>
        </figure>

        <h3>Overview</h3>
        <p>
          {{ overview }}
        </p>

        <figure class="box">
          <img :src="folioImage1" alt>
        </figure>

        <h3>Solution</h3>
        <div class="columns">
          <div class="column">
            <p>
              {{ solution }}
            </p>
          </div>
          <div class="column">
            <div class="skills-component">
              <ul>
                <li
                  v-for="(item, index) in skills"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <figure class="box">
          <img :src="folioImageDesktop" alt>
        </figure>
        <figure class="box">
          <img :src="folioImageMobile" alt>
        </figure>
        <div class="folio-image-other" v-html="folioOther">
          <!-- Any other relevant images -->
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
  name: 'TheCaseStudy',
  components: {},
  props: {
    heading: {
      type: String,
      default: 'Heading goes here'
    },
    headerImage: {
      type: String,
      default: 'https://via.placeholder.com/960x474?text=Company+Image'
    },
    overview: {
      type: String,
      default: 'Overview goes here'
    },
    folioImage1: {
      type: String,
      default: 'https://via.placeholder.com/960x474?text=Folio+Image+1'
    },
    solution: {
      type: String,
      default: 'Solution goes here'
    },
    skills: {
      type: Array,
      default: () => ['Skills go here', 'Skills go here', 'Skills go here']
    },
    folioImageDesktop: {
      type: String,
      default: 'https://via.placeholder.com/960x474?text=Desktop+Mockup'
    },
    folioImageMobile: {
      type: String,
      default: 'https://via.placeholder.com/960x474?text=Mobile+Mockup'
    },
    folioOther: {
      type: String,
      default: `
        <h4>Other relevant content 
        (images, calls-to-action, page navigation, testimonials)
        can go here.</h4>
        <img src="https://via.placeholder.com/150x150?" alt>
        <img src="https://via.placeholder.com/150x150?" alt>
        <img src="https://via.placeholder.com/150x150?" alt>
      `
    }
  }
}
</script>

<style lang="scss">
.case-study {
  & li, p {
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

  & ul li {
    list-style-type: square;
    color: $primary;
  }
}
</style>
