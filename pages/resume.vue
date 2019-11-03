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
                2006 - 2012
              </date>
            </h3>
            <div class="content">
              <ul>
                <li>Course Leader in Digital Arts &amp; Media</li>
                <li>Lecturer in Computer Games Design</li>
                <li>Subject Leader in: Digital Image Manipulation, Design for Interaction, Gameplay &amp; Game Mechanics, Project Management</li>
              </ul>
              <h5 class="is-size-6 pl-10">
                Special Achievements
              </h5>
              <ul>
                <li>Rising Star Award</li>
                <li>Successful KTP (Knowledge Transfer Partnership) bid writing bringing in £150, 000 for the department</li>
                <li>Game Design Team co-ordinator for AHRC joint project bid with Birmingham University Superconductivity Research Laboratory</li>
              </ul>
            </div>
          </div>
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              Freelance, <i>Web Developer</i>
              <date class="date">
                2004 - 2006
              </date>
            </h3>
            <div class="content">
              <p>
                Various web development projects including a consultancy for the University of Wolverhampton School of Art &amp; Design which ultimately led to my role as a full-time lecturer
              </p>
            </div>
          </div>
          <!-- End Item -->
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              Arkwright Consulting Limited, <i>Senior Project Manager</i>
              <date class="date">
                Sept 2004 - Sept 2005
              </date>
            </h3>
            <div class="content">
              <ul>
                <li>Web design</li>
                <li>Programming</li>
                <li>Account Management</li>
                <li>Technical Sales</li>
                <li>Business Networking</li>
              </ul>
            </div>
          </div>
          <!-- End Item -->
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              TITLE HERE
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <div class="content">
              CONTENT HERE
            </div>
          </div>
          <!-- End Item -->
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

footer {
  display: none !important;
}
</style>
