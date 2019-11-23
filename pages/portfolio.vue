<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6">
              <h1 class="title is-size-2 has-text-centered is-uppercase has-text-primary has-font-roboto-slab">
                Selected Works
              </h1>
              <h5 class="subtitle has-text-centered">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, minus! Exercitationem, blanditiis. Sint, consectetur tempora!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <the-portfolio />
  </div>
</template>

<script>
import ThePortfolio from '~/components/portfolio/ThePortfolio.vue'
export default {
  components: {
    ThePortfolio
  }
}
</script>
