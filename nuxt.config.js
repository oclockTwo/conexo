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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        },
      ],
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-DD1SKK8SCF",
        },
        {
          children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-DD1SKK8SCF');
          `,
        },
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8993913594775765",
          crossorigin: "anonymous",
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
