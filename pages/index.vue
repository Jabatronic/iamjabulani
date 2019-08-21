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
                    <li><a href="">Examples</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Help</a></li>
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
            <div class="column is-5">
              <span class="grid-line-vert-01" />
              <span class="grid-line-vert-02" />
              <span class="grid-line-03" />
              <span class="grid-line-04" />
              <span class="grid-line-05" />
              <h1 class="title is-2 jtron-logotype">
                <span class="first-name">Jabulani</span> <span class="second-name">Robbins</span>
              </h1>
              <br>
            </div>
            <div class="column is-6 is-offset-1">
              <!-- MAIN CONTENT WILL LIVE HERE -->
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
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
            background: #7a0026;
            font-family: 'Open Sans';
        }

div {
    border: 1px solid #fff;
}
        .has-font-roboto-slab {
            font-family: 'Roboto Slab', serif;
        }

        h1.jtron-logotype {
            position: absolute;
            width: 100vw;
            margin-left: -50px;
            padding-left: 50px;
            border-top: 1px solid #91002d;
            border-bottom: 1px solid #91002d;
            font-family: 'Roboto Slab', serif;
            color: #ff0051;
        }

        .jtron-logotype::before,
        .jtron-logotype::after {
            content: "";
            position: relative;
            width: 100%;
            height: 0;
            border-top: 1px solid #91002d;
        }

        .jtron-logotype::after {
            top: 45px;
            left: 0;
        }

        .jtron-logotype span.second-name {
            color: #bd003c;
        }

        span.grid-line-vert-01,
        span.grid-line-vert-02
        {
            width: 0;
            height: 100vh;
            position: absolute;
            border: none;
            border-left: 1px solid #91002d;
            top: -400px;
        }
        span.grid-line-vert-02 {
            left: 375px;
        }
        span.grid-line-02::after {
            left: 300px;
        }

        .j-primary {
            visibility: hidden;
        }

        img {
            padding: 5px;
            border: 1px solid #ccc;
        }
</style>
