<template>
  <div class="container">
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
        <nav class="navbar j-primary">
          <div class="container">
            <div class="navbar-brand is-hidden">
              <a class="navbar-item" href="../">
                <!-- <img src="../images/bulma.png" alt="Logo"> -->
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <div class="tabs is-right">
                  <ul>
                    <li class="is-active">
                      <a>Home</a>
                    </li>
                    <li><a href="">Item 0</a></li>
                    <li><a href="">Item 1</a></li>
                    <li><a href="">Item 2</a></li>
                    <li><a href="">Item 3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <h1 class="title is-2 jtron-logotype">
                <span class="first-name">Jabulani</span> <span class="second-name">Robbins</span>
                <span class="subtitle is-inline-block">Web Development Portfolio &amp; Résumé</span>
              </h1>

            </div>
            <div class="column is-6">
              <!-- MAIN CONTENT WILL LIVE HERE -->
<div class="columns is-multiline">
      <div class="column is-6">
         <div class="has-background-primary">1</div>
      </div>
      <div class="column is-6">
         <div class="has-background-danger">1</div>
      </div>
      <div class="column is-6">
         <div class="has-background-warning">1</div>
      </div>
      <div class="column is-6">
         <div class="has-background-info">1</div>
      </div>
</div>
              <!-- *************************** -->
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a>And this is the bottom</a></li>
              <li><a>And this is the bottom</a></li>
              <li><a>And this is the bottom</a></li>
              <li><a>And this is the bottom</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // ...
  }
}
</script>

<style>
        html,
        body {
            /* background: #7a0026; */
            font-family: 'Open Sans';
        }

div {
    border: 1px solid gray;
}
        .has-font-roboto-slab {
            font-family: 'Roboto Slab', serif;
        }

        h1.jtron-logotype {
            font-family: 'Roboto Slab', serif;
        }

        .jtron-logotype span.second-name {
            /* color: #bd003c; */
        }

        .j-primary {
            visibility: hidden;
        }

</style>
