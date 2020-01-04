<template>
  <div>
    <div>
      <ul class="case-study-nav">
        <div class="label">
          Other Selected Works
        </div>
        <li v-for="( link, index ) in navLinks" :key="index">
          <nuxt-link :to="link.path">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  ul.case-study-nav {
    margin: 0 auto;
    text-align: center;

      & li {
        display: inline-block;
        margin: .7rem .5rem;
        & a {
          background: $primary;
          font-size: 1.1rem;
          color: #fff;
          padding: .5rem .75rem;
          &.nuxt-link-active {
            background: $grey;
            cursor: default;
          }
        }
      }
  }
</style>

<script>
export default {
  computed: {
    navLinks () {
      const linkList = [
        { path: '/case_study_dantanna', title: 'Dantanna Beatz' },
        { path: '/case_study_first_wealth', title: 'First Wealth' },
        { path: '/case_study_ice_chef', title: 'The Ice Chef' },
        { path: '/case_study_little_big_programme', title: 'The Little Big Programme' },
        { path: '/case_study_prosperity_health', title: 'Prosperity Health' }
      ]
      return linkList
    }
  }
}
</script>
