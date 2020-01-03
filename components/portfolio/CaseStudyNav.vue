<template>
  <div>
    <div>
      <ul class="case-study-nav">
        <p class="label">
          Other Selected Works
        </p>
        <li>
          <nuxt-link to="case_study_dantanna">
            Dantanna Beatz
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="case_study_first_wealth">
            First Wealth
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="case_study_ice_chef">
            The Ice Chef
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="case_study_little_big_programme">
            The Little Big Programme
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="case_study_prosperity_health">
            Prosperity Health
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  ul.case-study-nav {
    width: 60%;
    margin: 0 auto;
    text-align: center;

      & li {
        display: inline-block;
        background: $primary;
        padding: .5rem;
        margin: .5rem;
        font-size: 1.1rem;
        & a {
          color: #fff;
        }
      }
  }
</style>
