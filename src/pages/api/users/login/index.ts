import { supabase } from '@/lib/supabaseClient'

interface QueryParams {
  email: string
  password: string
}

async function POST({ body }: { body: QueryParams }, res: any) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    })
    return res.json({ data, error })
  } catch (error: any) {
    return res.json({ error: error.message })
  }
}
export default POST
