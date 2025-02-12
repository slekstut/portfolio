export default defineNuxtConfig({
  runtimeConfig: {
    mySecret: process.env.MY_SECRET
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  css: ["@/assets/css/main.css"],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' }, 
      { code: 'lt', iso: 'lt-LT', name: 'Lietuvių' }
    ],
    defaultLocale: 'lt',
    vueI18n: './i18n.config.ts', 
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
});
