import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  typescript: {
    shim: false,
  },
  build: {
    transpile: ["@headlessui/vue"], // https://github.com/nuxt/framework/issues/2326#issuecomment-1009620007
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  components: true,
  css: ["@/assets/css/main.css"],
});
