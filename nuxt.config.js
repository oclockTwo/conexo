// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/google-adsense",
  ],
  googleAdsense: {
    id: "ca-pub-8993913594775765",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
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
        {
          defer: true,
          "data-domain": "conexojogo.com",
          src: "https://plausible.io/js/script.js",
        },
        {
          defer: true,
          "data-domain": "conexojogo.com",
          src: "https://yearbookai.online/js/script.js",
        },
        {
          type: "text/javascript",
          innerHTML: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "judst74vd5");
          `,
          hid: 'clarity-js', // 一个唯一的标识符
          // 防止 XSS 攻击，确保只有您控制的脚本被执行
          charset: 'utf-8',
          crossorigin: 'anonymous'
        },
      ],
    },
  },
  site: {
    url: "https://conexojogo.com",
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
});
