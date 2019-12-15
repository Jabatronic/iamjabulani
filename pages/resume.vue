<template>
  <div>
    <div class="columns">
      <!-- New Layout -->
      <div class="column">
        <h1 class="title is-uppercase has-font-roboto-slab has-text-teal">
          Jabulani Robbins
        </h1>

        <p>
          {{ myPhoneNum }} | {{ myEmailAddr }}
        </p>
        <p>{{ myLocation }}</p>

        <hr class="is-teal">
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-fifths left-column">
        <div class="summary">
          <h2 class="cv-heading underline title">
            Summary
          </h2>
          <p>
            An enthusiastic and creative web developer with 4 years of recent experience working as a freelancer. I have experience working with both front-end and back-end technologies and thrive on learning new things. Looking to gain agency experience with a forward-thinking organisation.
          </p>
        </div>
        <div class="experience">
          <h2 class="cv-heading underline title">
            Experience
          </h2>
          <div class="item">
            <h3 class="title is-size-4">
              Freelance <span class="has-text-weight-normal"> &mdash;  <i>Web Developer</i></span>
              <span class="date">
                2017 &ndash; Present
              </span>
            </h3>
            <div class="content">
              <ul>
                <li>Creating designs from scratch, wireframing, mockups using Adobe  Photoshop and XD.</li>
                <li>Learning to develop web apps and PWAs using Vue and Nuxt.js.</li>
                <li>Installing and configuring Wordpress and Wordpress plugins.</li>
                <li>Modifying Wordpress themes.</li>
                <li>Fixing issues with existing sites, primarily Wordpress.</li>
                <li>Creating and implementing solutions on existing sites, both Wordpress and bespoke solutions. </li>
              </ul>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Adventures of the Valparaiso <span class="has-text-weight-normal">&mdash; <i>Lead Developer</i></span>
              <span class="date">
                2015 &ndash; 2017
              </span>
            </h3>
            <div class="content">
              <p>
                Web developer for a creative social enterprise located on an antique canal boat in Amsterdam. Partly onboard, partly remote.
                <ul>
                  <li>Wordpress, PHP, CSS, JavaScript, WAMP.</li>
                  <li>Modifying and fixing the existing website.</li>
                  <li>Graphics work (Photoshop).</li>
                  <li>Remote working (Video Conferencing, messaging, email).</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Dantanna Beatz <span class="has-text-weight-normal">&mdash;<i>Creative Director / Musical Collaborator</i></span>
              <span class="date">
                2012 &ndash; 2015
              </span>
            </h3>
            <div class="content">
              <p>
                Music production and live performance project. I was responsible for conceptualising and producing print, video, and web-based media as well as co-producing music and performing on some pieces.
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              Wolverhampton University School of Art &amp; Design <span class="has-text-weight-normal">&mdash; <i>Lecturer</i></span>
              <span class="date">
                2006 &ndash; 2012
              </span>
            </h3>
            <div class="content">
              <ul>
                <li>Course Leader in Digital Arts &amp; Media</li>
                <li>Lecturer in Computer Games Design</li>
                <li>Module Leader in Digital Image Manipulation; Design for Interaction; Gameplay &amp; Game Mechanics; Final Project</li>
              </ul>
              <h5 class="is-size-6 pl-10">
                Special Achievements
              </h5>
              <ul>
                <li>Rising Star Award.</li>
                <li>Successful KTP (Knowledge Transfer Partnership) bid writing and project specification bringing in £150, 000 for the department.</li>
                <li>Game Design Team co-ordinator for AHRC joint project bid with Birmingham University Superconductivity Research Laboratory.</li>
                <li>Artist &amp; Speaker at ISEA Symposium, Singapore (2009).</li>
              </ul>
            </div>
          </div>
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              Freelance <span class="has-text-weight-normal">&mdash;  <i>Web Developer</i></span>
              <span class="date">
                2004 &ndash; 2006
              </span>
            </h3>
            <div class="content">
              <p>
                Various web development projects including a consultancy for the University of Wolverhampton School of Art &amp; Design.
              </p>
            </div>
          </div>
          <!-- End Item -->
          <!-- Start Item -->
          <div class="item">
            <h3 class="title is-size-4">
              Arkwright Consulting Limited <span class="has-text-weight-normal">&mdash; <i>Technical Lead</i></span>
              <span class="date">
                Sept 2004 &ndash; Sept 2005
              </span>
            </h3>
            <div class="content">
              <ul>
                <li>Graphic design</li>
                <li>Web development (PHP + MySQL)</li>
                <li>Web design (HTML, CSS)</li>
                <li>Account Management</li>
                <li>Technical Sales</li>
                <li>Business Networking</li>
                <li>Bookkeeping</li>
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
              Prosperity Health <span class="has-text-weight-normal"><i>&mdash; Custom Wordpress site with Ecommerce</i></span>
              <span class="date">
                2018 &ndash; present
              </span>
            </h3>
            <div class="content">
              <p>Consulting on web marketing strategy. Designing and implementing a custom Wordpress site with WooCommerce.</p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              The Little Big Programme <span class="has-text-weight-normal"><i>&mdash; Bespoke web app</i></span>
              <span class="date">
                2018
              </span>
            </h3>
            <p>Built with Laravel, Bootstrap, and GSAP Animation Library</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              3 Days (Shots fired) <span class="has-text-weight-normal"><br><i>&mdash; A coffee table book for the post-truth era &mdash; Personal project</i></span>
              <span class="date">
                2017
              </span>
            </h3>
            <p>Programmatically generated photo gallery of the locations and details of gun violence incidents in the USA over 3 days in December 2015. Created using Google Street View API, Gun Violence Archive datasets, PHP. Active research for a broader project on crime data.</p>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              J-Grain <span class="has-text-weight-normal"><i>&mdash; Granular Synthesiser &mdash; Personal project</i></span>
              <span class="date">
                2015
              </span>
            </h3>
            <p>A breadboard prototype for a pocket-sized granular synthesiser made with Arduino.</p>
          </div>
        </div>
        <div class="skills">
          <h2 class="cv-heading underline title">
            Skills
          </h2>
          <!-- Skills Content Here -->
          <div class="columns">
            <div class="column is-half">
              <div>
                <ul>
                  <li>HTML5, CSS3</li>
                  <li>Javascript, Vue.js, Nuxt.js, jQuery</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>Wordpress</li>
                  <li>Sass/Scss</li>
                  <li>Webpack</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="education">
          <h2 class="cv-heading underline title">
            Awards &amp; Education
          </h2>
          <div class="item">
            <h3 class="title is-size-4">
              Coventry University
              <span class="has-text-weight-normal">&mdash;
                <i>MA in Media Arts</i>
              </span>
              <span class="date">
                November 2008
              </span>
            </h3>
            <div class="content">
              <p>
                Research into language and semiotics,
                modern Mythologies, and Human-Computer Interaction.
                Final project (entitled "Scionica") created using:
                <ul>
                  <li>Microsoft Speech SDK (C# .Net) for language processing,</li>
                  <li>Actionscript 3 for visualisations,</li>
                  <li>PureData for audio processing.</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="item">
            <h3 class="title is-size-4">
              University of Wolverhampton
              <span class="has-text-weight-normal"><br>&mdash;
                <i>BA(Hons) 2.1 in Interactive Media</i>
              </span>
              <span class="date">
                June 2004
              </span>
            </h3>
            <div class="content">
              <p>
                <!-- Content -->
              </p>
            </div>
          </div>
        </div>
        <div class="interests">
          <h2 class="cv-heading underline title">
            Interests
          </h2>
          <div class="content">
            <p>Open Source Culture, Arduino, Music (playing &amp; listening), Electric Guitars, Yoga &amp; Meditation, Self Improvement, Life Hacking, Productivity Techniques, Art, Science, Technology, Philosophy, Food (cooking &amp; eating), Film, Human Psychology</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      myPhoneNum: '(+44) 7969 910 258',
      myEmailAddr: 'jabu.robbins@gmail.com',
      myLocation: 'Poole, Dorset, UK'
    }
  },
  head () {
    return {
      title: 'Résumé - Web development & Design - Jabulani Robbins',
      link: [
        { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap', as: 'style' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap' }
      ],
      bodyAttrs: {
        id: 'ResumePage'
      }
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

.left-column > * {
  max-width: 40rem;
}

.summary, .experience, .projects, .skills, .education, .interests {
  margin-bottom: 1.7rem;
    & .cv-heading {
      font-family: 'Roboto'
    }
}

.experience, .projects, .education {
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

// Hide footer on this page only by page ID
#ResumePage .footer {
  display: none;
}
</style>
