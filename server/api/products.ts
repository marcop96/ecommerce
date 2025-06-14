import { createServerClient } from '@supabase/ssr'
import { getCookie, setCookie, deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  console.log('config.supabaseUrl:', config.public.supabaseUrl)
  console.log('config.supabaseAnonKey:', config.public.supabaseAnonKey)

  const client = createServerClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey,
    {
      cookies: {
        get: (name) => getCookie(event, name),
        set: (name, value, options) => setCookie(event, name, value, options),
        remove: (name, options) => deleteCookie(event, name, options),
      },
    }
  )

  try {
    if (event.method === 'GET') {
      const { data, error } = await client.from('products').select('*')

      if (error) {
        console.error('Supabase error:', error)
        throw createError({ statusCode: 500, message: error.message })
      }

      return { products: data }
    }

    return { error: 'Method not allowed' }
  } catch (e) {
    console.error('Handler error:', e)
    throw createError({ statusCode: 500, message: 'Internal Server Error' })
  }
})
