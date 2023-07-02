// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      tmdb: process.env.TMBD_TOKEN,
    },
  },
});
