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
            I am a frontend developer with solid knowledge and experience of the full-stack.
          </p>
        </div>
        <div class="experience">
          <h2 class="cv-heading underline title">
            Experience
          </h2>
          <div class="item">
            <h3 class="title is-size-4">
              Freelance - <span class="has-text-weight-normal"><i>Web Developer</i></span>
              <date class="date">
                2017 - Present
              </date>
            </h3>
            <div class="content">
              <p>
                Various web development projects including a consultancy for the University of Wolverhampton School of Art &amp; Design which ultimately led to my role as a full-time lecturer
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Adventures of the Valparaiso - <span class="has-text-weight-normal"><i>Lead Developer</i></span>
              <date class="date">
                2015 - 2017
              </date>
            </h3>
            <div class="content">
              <p>
                Web developer for a creative social enterprise located on an antique canal boat in Amsterdam. Partly onboard, partly remote.
                <ul>
                  <li>Wordpress, PHP, CSS, JavaScript, NGINX</li>
                  <li>Remote working (Video Conferencing, messaging, email)</li>
                  <li>Cooking, cleaning, boat maintenance</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Dantanna Beatz - <span class="has-text-weight-normal"><i>Creative Director / Musical Collaborator</i></span>
              <date class="date">
                2012 - 2015
              </date>
            </h3>
            <div class="content">
              <p>
                Music production and live performance project. I was responsible for conceptualising and producing print, video, and web based media as well as co-producing music and performing on some pieces (guitar, vocals).
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Wolverhampton University School of Art &amp; Design - <span class="has-text-weight-normal"><i>Lecturer</i></span>
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
                <li>Artist &amp; Speaker at ISEA Symposuim 2009</li>
              </ul>
            </div>
          </div>
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              Freelance - <span class="has-text-weight-normal"><i>Web Developer</i></span>
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
              Arkwright Consulting Limited, - <span class="has-text-weight-normal"><i>Senior Project Manager</i></span>
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
              Prosperity Health, <span class="has-text-weight-normal"><i>Custom Wordpress Site built on Genesis Framework</i></span>
              <date class="date">
                2018 - 2019
              </date>
            </h3>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              The Little Big Programme, <span class="has-text-weight-normal"><i>Bespoke web app, built on Laravel. </i></span>
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <p>An amazing and challenging experience for me. I learnt Laravel framework for this project and delivered a working prototype which has since been adopoted by the organisation.</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              The Big Programme, <span class="has-text-weight-normal"><i>Early prototypt</i></span>
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. I est earum sed totam ad distinctio voluptatibus.</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              J-Grain, <span class="has-text-weight-normal"><i>Granular Synthesiser</i></span>
              <date class="date">
                ???? - ????
              </date>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="skills">
          <h2 class="cv-heading underline title">
            Skills
          </h2>
          <!-- Skills Content Here -->
        </div>
        <div class="education">
          <h2 class="cv-heading underline title">
            Awards &amp; Education
          </h2>
        </div>
        <div class="interests">
          <h2 class="cv-heading underline title">
            Interests
          </h2>
          <div class="content">
            <p>Hacker Culture, Hacker Art, Open Source Culture, Arduino, Music (playing &amp; listening), Electric Guitars, Yoga &amp; Meditation, Self Improvement, Life Hacking, Productivity Techniques, Art, Science, Technology, Philosophy, Food (cooking &amp; eating), Film, Human Psychology</p>
          </div>
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

.summary, .experience, .projects, .skills, .education, .interests {
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
