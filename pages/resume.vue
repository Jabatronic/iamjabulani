<template>
  <div>
    <div class="columns is-fullheight">
      <!-- Personal Deets -->
      <div class="column is-10">
        <h1 class="title is-uppercase has-font-roboto-slab">
          M Jabulani Robbins
        </h1>
        <div class="is-desktop">
          <p>
            {{ myPhoneNum }} | {{ myEmailAddr }}
          </p>
          <p>{{ myLocation }}</p>
        </div>
        <hr class="is-teal">
        <div class="content">
          <h3>Career Objective</h3>
          <p>To gain experience in an agency environment using bleeding edge technologies, and work flows</p>
        </div>
        <div class="columns content">
          <div class="column is-6">
            <h4>Education</h4>
            <ul>
              <li><h5>MA Media Arts (Distinction)</h5></li>
              <p>Research Topics Included:</p>
              <ul>
                <li>Visual Language and Semiotics</li>
                <li>Human Computer Interaction</li>
                <li>Interaction Design</li>
              </ul>
              <li><h5>BA(Hons) Upper Second Class - Interactive Media Communication</h5></li>
              <p>Modules Included:</p>
              <ul>
                <li>HTML, JavaScript, CSS</li>
                <li>User Centered Design</li>
                <li>Multimedia Design - [Kiosk and embedded installations]</li>
              </ul>
            </ul>
          </div>
          <div class="column is-6">
            <h4>Technical Proficiencies</h4>
            <p>
              HTML5, CSS3, JavaScript, jQuery, VueJs, PHP, Content Management Systems (Wordpress), PHP MVC Frameworks (Laravel),
              Modern build tools (Gulp, webpack, sass)
              Exemplary written and verbal communication skills
            </p>
            <h4>Other Certificates</h4>
            <ul>
              <li>Level 3 Diploma in Applied Therapeutic Skills</li>
              <li>Theater for conflict resolution</li>
              <li>Education for Sustainable development</li>
            </ul>
          </div>
        </div>
        <div class="content">
          <h2 class="title">
            Experience
          </h2>
          <hr class="is-teal">
          <h4 class="title is-size-4">
            <span class="has-text-teal">2017 - Present:</span> Freelance Web Developer
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel eaque magni porro quasi dolor explicabo nemo, natus vitae recusandae nam perspiciatis eius est earum sed totam ad distinctio voluptatibus.</p>
          <h4 class="title is-size-4">
            <span class="has-text-teal">2014 - 2017:</span> Adventures of the Valparaiso
          </h4>
          <p>
            Web developer for a creative social enterprise located on an antique canal boat in Amsterdam. Partly on site, partly remote.
            <ul>
              <li>Wordpress, PHP, CSS, JavaScript, Apache</li>
            </ul>
          </p>
          <h4 class="title is-size-4">
            <span class="has-text-teal">2008 - 2014: </span>  Wolverhampton University School of Art &amp; Design
          </h4>

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
            <li>Successful KTP bid writing bringing in £150, 000 for the department</li>
            <li>Game Design Team co-ordinator for AHRC joint project bid with Birmingham University Superconductivity Research Laboratory</li>
          </ul>

          <h4 class="title is-size-4">
            <span class="has-text-teal">2006 - 2008:</span> Freelance Web Developer
          </h4>
          <p>Various web development projects including a consultancy for the University of Wolverhampton School of Art &amp; Design which ultimately led to my role as a full-time lecturer</p>
          <ul>
            <li>PHP, JavaScript, CSS, Apache</li>
          </ul>
          <h4 class="title is-size-4">
            <span class="has-text-teal">2004 - 2006:</span> Arkwright Consulting
          </h4>
          <p>Web Designer/Developer - Graduate Placement</p>
          <ul>
            <li>OS Commerce, PHP, JavaScript, CSS, Apache</li>
          </ul>
        </div>
      </div>
      <div class="sidebar column is-teal has-text-white is-hidden-mobile">
        <div class="columns">
          <div class="column is-centered has-text-centered">
            <figure class="image">
              <img class="is-rounded" src="~/assets/images/jabulani_robbins.jpg" alt="Portrait image of M Jabulani Robbins">
            </figure>
            <div>
              <br>
              <h3 class="title has-text-white has-font-roboto-slab">
                Interests
              </h3>
              <ul>
                <li>Electric Guitar</li>
                <li>Art &amp; Design</li>
                <li> Science &amp; Tech</li>
                <li>Yoga &amp; Meditation</li>
              </ul>
            </div>
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

<style scoped>
/* For da debug */
.border-red {
    border: 1px solid red;
}
</style>
