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
                Some web design &amp; development projects I've had the pleasure of working on. I'll be creating a home for my art &amp; experimental projects soon!
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
