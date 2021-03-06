export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "22-century-web",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/styles/reset.css"],

  // Global SCSS
  styleResources: {
    scss: [
      "~/assets/styles/main.scss",
      "~/assets/styles/colors.scss",
      "~/assets/styles/typography.scss"
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/sanity-block-content"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/sanity"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/style-resources"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
