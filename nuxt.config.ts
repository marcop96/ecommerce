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
      //stripeKey: process.env.STRIPE_PUBLIC_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
    //stripeSecret: process.env.STRIPE_SECRET_KEY,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  }
})
