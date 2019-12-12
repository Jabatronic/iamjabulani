
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jabulani Robbins - Portfolio & Resume',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jabulani Robbins - Portfolio & Resume' },
      // Open Graph
      { name: 'og:title', content: 'IAMJABULANI' },
      { name: 'og:description', content: 'The Web Development Portfolio & Resume' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://iamjabulani.tech' },
      { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@?????' },
      { name: 'twitter:title', content: 'IAMJABULANI' },
      { name: 'twitter:description', content: 'The Web Development Portfolio & Resume' },
      { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
      { name: 'twitter:image:alt', content: 'NuxtJS Logo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }

    ],
    bodyAttrs: {
      class: ['has-navbar-fixed-top']
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Make sass variables available globally
  */
  styleResources: {
    scss: ['~/assets/scss/_variables.scss']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/aos', ssr: false },
    { src: '@/plugins/vue-lazy', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images',
    '~/modules/typefaces',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    // your settings here
    // whitelist: ['body.has-navbar-fixed-top']
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'responsive-loader',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    responsive: {
      sizes: [1000, 750, 500, 330, 200],
      placeholder: true
    },
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
