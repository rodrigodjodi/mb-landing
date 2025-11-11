// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3327,
  },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/scripts"],
  css: ["~/assets/css/main.css"],
  
  
  
});
