// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  runtimeConfig: {
    public: {
      stripeKey: process.env.STRIPE_PUBLIC_KEY
    },
    stripeSecret: process.env.STRIPE_SECRET_KEY
  }
})
