// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap', '@nuxtjs/robots'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
      },
      meta: [
        {
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        },
      ],
    },
  },
  site: {
    url: "https://conexojogo.com",
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
})
