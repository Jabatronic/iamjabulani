
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
      // { rel: 'preload', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com/css?family=Raleway|Roboto|Roboto+Slab:600&display=swap', as: 'style' },
      // { rel: 'stylesheet', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com/css?family=Raleway|Roboto|Roboto+Slab:600&display=swap' }
      // { rel: 'preload', type: 'href: '@assets/fonts/typeface-roboto-slab/index.css', as: 'style' },
      // { rel: 'stylesheet', type: 'preload', href: './assets/fonts/typeface-roboto-slab/index.css' }
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
  ** PWA Options
  */
  pwa: {
    workbox: {
      /* workbox options */
      config: {
        debug: true
      },
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
          handler: 'cacheFirst',
          cacheableResponse: {
            statuses: [0, 200]
          },
          strategyOptions: {
            cacheName: 'google-fonts',
            cacheExpiration: {
              maxEntries: 30
            }
          }
        }
      ]
    }
  },
  /*
  ** Overwrite's generated manifest values
  */
  manifest: {
    name: 'I AM JABULANI - The Portfolio & Resume',
    short_name: 'I AM JABULANI',
    lang: 'en',
    display: 'standalone'
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
    '~/modules/typefaces'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
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
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    // bundleRenderer: {
    //   shouldPreload: (file, type) => {
    //     return ['script', 'style', 'font'].includes(type)
    //   }
    // },
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
