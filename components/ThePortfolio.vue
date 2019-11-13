<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">
              Vertical...xxxx
            </p>
            <p class="subtitle">
              Top tile
            </p>
          </article>
          <article class="tile is-child notification is-primary">
            <p class="title">
              ...tiles
            </p>
            <p class="subtitle">
              Bottom tile
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary" style="background: url(https://bulma.io/images/placeholders/640x480.png) center/100%">
            <p class="title">
              Middle tile
            </p>
            <p class="subtitle">
              With an image
            </p>
            <figure class="image is-4by3">
              <!-- <img src="https://bulma.io/images/placeholders/640x480.png"> -->
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">
            Wide tile
          </p>
          <p class="subtitle">
            Aligned with the right tile
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum pariatur ullam, mollitia delectus suscipit debitis quis accusamus dignissimos! Deserunt pariatur praesentium totam. Rerum rem quis repellat mollitia molestiae consequatur accusamus?
          </p>
          <div class="content">
          <!-- Content -->
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p class="title">
            Tall tile
          </p>
          <p class="subtitle">
            With even more content
          </p>
          <div class="content">
          <!-- Content -->
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
// for da debug

.tile {
  // height: 30rem;
}

  /* Folio Tiles */
article {
  // padding: 0;
  overflow: hidden;
}

article img {
  transition: all 0.6s;
}

article:hover img {
    transform: scale(1.2);
    cursor: pointer;
}

// article p {
  // visibility: hidden;
// }

// .tile.is-gapless {
//   .tile.is-parent {
//     padding: 0;
//   }

//   .tile.is-vertical>.tile.is-child {
//     margin-bottom: 0 !important;
//   }

//   .notification {
//     border-radius: 0;
//   }
// }
</style>
