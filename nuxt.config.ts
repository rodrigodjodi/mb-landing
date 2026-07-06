// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3327,
  },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/scripts"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "Maquete de Bolso — Maquetes virtuais interativas para incorporadoras",
      meta: [
        {
          name: "description",
          content:
            "Maquetes virtuais interativas a partir de captura aérea real, entregues como uma plataforma completa de apresentação para o seu lançamento.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",
        },
      ],
    },
  },
});
