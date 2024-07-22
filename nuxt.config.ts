// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss'
  ],
  modules: [ '@nuxt/image'],
  app:{
    head: {
      title: "サイト名をここに",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }, // ファビコンは public/favicon.png にしてください
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }]
})
