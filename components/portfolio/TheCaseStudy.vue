<template>
  <div class="case-study">
    <div class="columns is-centered">
      <div class="column is-9">
        <div id="CaseStudyHeader">
          <h1 class="title is-2 jtron-logotype has-text-centered">
            Case Study: {{ heading }}
          </h1>
          <figure class="folio-image">
            <img :src="headerImage" type="image/webp" alt>
          </figure>
        </div>
        <div id="CaseStudyOverview">
          <div class="mb-20 mt-20">
            <h3>
              Overview
            </h3>
            <p>
              {{ overview }}
            </p>
          </div>
          <figure class="folio-image is-boxed">
            <img :src="folioImage" alt>
          </figure>
        </div>
        <div id="CaseStudySolution" class="mb-20 mt-20">
          <div class="columns">
            <div class="column is-two-thirds">
              <h3>
                Solution
              </h3>
              <p>
                {{ solution }}
              </p>
            </div>
            <div class="column">
              <div class="skills-component content">
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
        </div>
        <div id="CaseStudyImage1" class="mb-20 mt-20">
          <figure class="folio-image desktop">
            <img :src="folioImageDesktop" alt>
          </figure>
          <figure class="folio-image mobile">
            <img :src="folioImageMobile" alt>
          </figure>
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
    folioImage: {
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
      type: Object,
      default: () => {
        return {
          title: `Other relevant content 
            (images, calls-to-action, page navigation, testimonials) 
            can go here.`,
          image: 'https://via.placeholder.com/150x150?'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.case-study {
  & li, p, h3 {
    font-size: 1rem;
    font-family: $body-font;
  }
  & h3 {
    text-transform: uppercase;
    font-weight: 600;
    color: $primary;
  }
  & .folio-image {
    display: flex;
    justify-content: center;
    border-radius: $radius;
    padding: 0;
    margin: 0 0 32px 0;
    width: 100%;
    &.desktop, &.mobile {
      background: $primary;
    }
  }
  & .li, p {
    font-size: 1rem;
  }
}

  img {
    border-radius: 3px;
  }

  div.skills-component {
    border-left: .01rem solid $primary;

    & ul {
      margin-top: 0;

    & li {
      list-style-type: disc;
    }
  }

  @include mobile {
    border: none;
    padding-top: 10px;
  }

  & ul {
    margin-top: 0;
  }

  & ul > li {
    list-style-type: square;
    color: $primary;
  }
}

</style>
