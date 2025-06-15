import { createServerClient } from '@supabase/ssr'
import { getCookie, setCookie, deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Use service role key for admin operations
  const client = createServerClient(
    config.public.supabaseUrl,
    config.supabaseServiceKey,
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
      const { data, error } = await client
        .from('categories')
        .select('*')
        .order('name', { ascending: true })

      if (error) {
        console.error('Supabase error:', error)
        throw createError({ statusCode: 500, message: error.message })
      }

      return { categories: data }
    }

    if (event.method === 'POST') {
      const body = await readBody(event)
      
      // Generate slug from name if not provided
      const slug = body.slug || body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const { data, error } = await client
        .from('categories')
        .insert([
          {
            ...body,
            slug,
            created_at: body.created_at || new Date().toISOString(),
            updated_at: body.updated_at || new Date().toISOString()
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        throw createError({ statusCode: 500, message: error.message })
      }

      return { category: data }
    }

    return { error: 'Method not allowed' }
  } catch (e) {
    console.error('Handler error:', e)
    throw createError({ statusCode: 500, message: 'Internal Server Error' })
  }
})
