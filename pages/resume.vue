<template>
  <div>
    <div class="columns">
      <!-- New Layout -->
      <div class="column">
        <h1 class="title is-uppercase has-font-roboto-slab has-text-teal">
          M Jabulani Robbins
        </h1>

        <p>
          {{ myPhoneNum }} | {{ myEmailAddr }}
        </p>
        <p>{{ myLocation }}</p>

        <hr class="is-teal">
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-fifths">
        <div class="summary">
          <h2 class="cv-heading underline title">
            Summary
          </h2>
          <p>
            To gain experience in an agency environment using bleeding edge technologies, and work flows
          </p>
        </div>
        <div class="experience">
          <h2 class="cv-heading underline title">
            Experience
          </h2>
          <div class="item">
            <h3 class="title is-size-4">
              Freelance Web Developer
              <date class="date">
                2017 - Present
              </date>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel eaque magni porro quasi dolor explicabo nemo, natus vitae recusandae nam perspiciatis eius est earum sed totam ad distinctio voluptatibus.</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Adventures of the Valparaiso
              <date class="date">
                2014 - 2017
              </date>
            </h3>
            <p>
              Web developer for a creative social enterprise located on an antique canal boat in Amsterdam. Partly on site, partly remote.
              <ul>
                <li>Wordpress, PHP, CSS, JavaScript, Apache</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Wolverhampton University School of Art &amp; Design
              <date class="date">
                2008 - 2014
              </date>
            </h3>
            <p>
              Web developer for a creative social enterprise located on an antique canal boat in Amsterdam. Partly on site, partly remote.
              <ul>
                <li>Wordpress, PHP, CSS, JavaScript, Apache</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Right Column -->
        <div class="projects">
          <h2 class="cv-heading underline title">
            Projects
          </h2>
          <div class="item">
            <h3 class="title is-size-4">
              Lorem Impsum #1
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel eaque magni porro quasi dolor explicabo nemo, natus vitae recusandae nam perspiciatis eius est earum sed totam ad distinctio voluptatibus.</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Lorem Impsum #2
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel eaque magni porro quasi dolor explicabo nemo, natus vitae recusandae nam perspiciatis eius est earum sed totam ad distinctio voluptatibus.</p>
          </div>
        </div>
        <div class="skills">
          <h2 class="cv-heading underline title">
            Skills
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myPhoneNum: '(+44) 7969 910 258',
      myEmailAddr: 'jabu.robbins@gmail.com',
      myLocation: 'Poole, Dorset, UK'
    }
  }
}
</script>

<style lang="scss">
.title:not(h1) {
  font-family: 'Roboto';
}
.cv-heading.underline {
  border-bottom: 1px solid $teal;
  padding-bottom: 0px;
  max-width: 40rem;
}

.cv-heading.underline:after {
  content: "";
  display: block;
  position: relative;
  top: 4px;
  width: 30px;
  height: 3px;
  background: $teal;
}

.summary, .experience, .projects, .skills {
  margin-bottom: 1.7rem;
    & .cv-heading {
      font-family: 'Roboto'
    }
}

.experience, .projects {
  & .date {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Raleway';
    color: $teal;
    margin-top: 0.5rem;
  }

  & .item {
    margin-bottom: 2rem;
  }
}
</style>
