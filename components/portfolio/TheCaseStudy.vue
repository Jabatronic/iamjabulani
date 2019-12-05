<template>
  <div v-lazy-container="{ selector: 'img' }" class="case-study">
    <!-- EXPT: HEADER -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column ">
              <h1 class="title is-size-2 has-text-centered has-text-primary has-font-roboto-slab">
                {{ heading }}
              </h1>
              <!-- <h5 class="subtitle has-text-centered">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, minus! Exercitationem, blanditiis. Sint, consectetur tempora!
              </h5> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END --- EXPT: HEADER -->
    <div class="columns is-centered">
      <div class="column is-9">
        <div id="CaseStudyHeader">
          <div class="figure-wrap">
            <figure class="folio-image">
              <img
                :data-src="headerImage"
                alt
              >
            </figure>
          </div>
        </div>
        <div id="CaseStudyOverview">
          <div class="mb-20 mt-20">
            <h3>
              {{ overviewTitle }}
            </h3>
            <div
              v-html="overview"
              class="content"
            />
          </div>
          <div class="figure-wrap">
            <figure class="folio-image">
              <img :data-src="folioImage" alt>
            </figure>
          </div>
        </div>
        <div id="CaseStudySolution" class="mb-20 mt-20">
          <div class="columns">
            <div class="column is-two-thirds">
              <h3>
                Solution
              </h3>
              <div
                v-html="solution"
                class="content"
              />
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
          <div class="figure-wrap has-background-primary">
            <figure class="folio-image desktop">
              <img :data-src="folioImageLaptop" alt>
            </figure>
          </div>
          <div class="figure-wrap">
            <figure class="folio-image mobile">
              <img :data-src="folioImageMobile" alt>
            </figure>
          </div>
          <figure
            v-if="folioImageExtra"
            class="folio-image mobile"
          >
            <img :data-src="folioImageExtra" alt>
          </figure>
        </div>
        <!--
          TODO:
          A final item??
          e.g. Call to action, arrows to next and previous project, etc
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
      type: Object,
      default: require('~/assets/images/placeholders/company-image-1000x474.png')
    },
    overviewTitle: {
      type: String,
      default: 'Overview title goes here'
    },
    overview: {
      type: String,
      default: 'Overview goes here'
    },
    folioImage: {
      type: Object,
      default: require('~/assets/images/placeholders/folio-image-01-1000x474.png')
    },
    solution: {
      type: String,
      default: 'Solution goes here'
    },
    skills: {
      type: Array,
      default: () => ['Skills go here', 'Skills go here', 'Skills go here']
    },
    folioImageLaptop: {
      type: Object,
      default: require('~/assets/images/placeholders/laptop-mockup-1000x474.png')
    },
    folioImageMobile: {
      type: Object,
      default: require('~/assets/images/placeholders/mobile-mockup-1000x474.png')
    },
    folioImageExtra: {
      type: Object,
      default: () => null
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
  & .figure-wrap {
    background: #fff;
    &.bg-primary {
      background: $primary;
    }
  }

  & li, p, h3 {
    font-size: 1rem;
    font-family: $body-family;
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
    background-image: url(/loading.gif);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    &.desktop, &.mobile {
      background-color: $primary;
      background-image: url(/loading-white.gif);
      padding-top: $gap * 3;
      padding-bottom: $gap * 3;
      }
    }
  }

  img {
    border-radius: 3px;
    &[lazy="loading"] {
      min-height: 400px;
    }
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
