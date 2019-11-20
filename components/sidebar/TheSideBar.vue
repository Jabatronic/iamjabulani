<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="has-text-grey title is-size-6">
          Skills Used
        </h2>
        <!-- Skills -->
        <div>
          <ul class="is-size-6">
            <li
              v-for="(item, index) in skills"
              :key="index"
              class="is-size-6"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <hr>
        <p class="menu-label has-text-grey-dark">
          Dantanna Beatz
        </p>
        <div class="image folio-tile box">
          <nuxt-link to="case_study_dantanna">
            <img src="~/assets/images/dantanna_frontpage_folio.jpg" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="menu-label has-text-grey-dark">
          First Wealth
        </p>
        <div class="image folio-tile box">
          <nuxt-link to="case_study_first_wealth">
            <img src="~/assets/images/first_wealth_frontpage_folio.jpg" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="menu-label has-text-grey-dark">
          The Ice Chef
        </p>
        <div class="image folio-tile box">
          <nuxt-link to="case_study_ice_chef">
            <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="menu-label has-text-grey-dark">
          EDAS
        </p>
        <div class="image folio-tile box">
          <nuxt-link to="case_study_edas">
            <img src="~/assets/images/edas_frontpage_folio.jpg" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="menu-label has-text-grey-dark">
          The Little Big Programme
        </p>
        <div class="image folio-tile box">
          <nuxt-link to="case_study_little_big_programme">
            <img src="~/assets/images/the_ice_chef_frontpage_folio.jpg" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: () => ['no skills listed!']
    }
  }
}
</script>

<style lang="scss">

</style>
