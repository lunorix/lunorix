// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss'
  ],
  modules: [ '@nuxt/image'],
  app:{
    head: {
      title: "Your website name here",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }, // Favicon should be public/favicon.png
      ],
    },
  },
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }]
})
