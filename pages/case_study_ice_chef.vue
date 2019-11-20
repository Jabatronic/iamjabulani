<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-9">
        <h1 class="title is-2 jtron-logotype">
          Case Study: The Ice Chef
        </h1>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore qui ad pariatur unde, enim iure quos consequuntur voluptas deleniti, nulla voluptatibus in amet a molestiae sed sunt perspiciatis molestias.
        </p>
        <figure class="box">
          <img :src="require('~/assets/images/placeholder.png').src" :srcSet="require('~/assets/images/placeholder.png').srcSet">
        </figure>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam maiores quaerat in id assumenda quae placeat recusandae maxime doloremque et porro explicabo laborum modi rerum, perspiciatis pariatur, voluptatum dolorum facere.</p>

        <!-- MORE INFO HERE -->
        <h3>Skills Used</h3>
        <ul>
          <li>Laravel, PHP</li>
          <li>HTML, JavaScript, CSS</li>
          <li>GSAP (JavaScript) Animation</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div class="column is-3">
        <!-- Start Sidebar -->
        <the-sidebar />
        <!-- End Sidebar -->
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from '~/components/sidebar/TheSidebar.vue'

export default {
  name: 'CaseStudyIceChef',
  components: {
    TheSidebar
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
