<template>
  <footer class="sticky-footer is-hidden-desktop">
    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li>
              <a>Contact Me!</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  body {
    padding-bottom: 80px;
  }
  // Footer mods
  footer.sticky-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100vw;
    background: #fff;
  }
</style>
