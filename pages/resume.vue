<template>
  <div class="container is-fluid">
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
          <p>To gain experience with forward thinking digital agencies and develop my use of modern development techniques.</p>
        </div>
        <div class="columns content">
          <div class="column is-6">
            <h4>Education</h4>
            <ul>
              <li><h5>MA Media Arts (Distinction)</h5></li>
              <h7>Research Topics Included:</h7>
              <ul>
                <li>Visual Language and Semiotics</li>
                <li>Human Computer Interaction</li>
                <li>Interaction Design</li>
              </ul>
              <li><h5>BA(Hons) Upper Second Class - Interactive Media Communication</h5></li>
              <h7>Modules Included:</h7>
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
        <h2 class="title">
          Experience
        </h2>
        <hr
          class="is-teal"
        >

        <ul>
          <li>
            <h4>Freelance</h4>
            <ul>
              <li>2017 - Present: Freelance Web Developer</li>
            </ul>
          </li>
          <h4>2014 - 2017 Adventures of the Valparaiso</h4>
          <li>
            <p>
              Art based social enterprise located on an antique canal boat in Amsterdam
            </p>
          </li>
          <h4>2008 - 2014 Wolverhampton University School of Art &amp; Design</h4>
          <li>
            Course Leader in Digital Arts &amp; Media
          </li>
          <li>
            Subject Leader in: Digital Image Manipulation, Interactivity Design, Project Management
          </li>
          <li>
            Lecturer in Computer Games Design
          </li>
          <li>
            Subject Leader in: Digital Image Manipulation, Interactivity Design, Project Management
          </li>
          <li>
            <p>
              20??: Subject Leader in Computer Games Design  (University of Wolverhampton)
            </p>
          </li>
        </ul>
        <p>
          20??: Graduate Placement (Arkwright Consulting)
        </p>
      </div>

      <aside class="sidebar column is-teal has-text-white is-hidden-mobile">
        <div class="columns">
          <div class="column content is-centered">
            <figure class="image">
              <img class="is-rounded" src="~/assets/images/jabulani_robbins.jpg" alt="">
            </figure>
            <div>
              <br>
              <h3 class="has-text-white has-font-roboto-slab">
                Contact
              </h3>
              <p>
                {{ myPhoneNum }}
              </p>
              <p>{{ myEmailAddr }}</p>
              <p>{{ myLocation }}</p>
              <h3 class="has-text-white has-font-roboto-slab ">
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
      </aside>
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

.sidebar {
  /* width: 200px; */
}

</style>
