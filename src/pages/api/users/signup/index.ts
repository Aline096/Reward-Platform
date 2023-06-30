import { supabase } from '@/lib/supabaseClient'
import {
  InsertUserDocument,
  InsertUserMutation,
} from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'

interface QueryParams {
  username: string
  email: string
  password: string
}

async function POST({ body }: { body: QueryParams }, res: any) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          username: body.username,
        },
      },
    })
    if (!error && data.user?.identities?.length !== 0) {      
      const user: InsertUserMutation = await client.request(
        InsertUserDocument,
        {
          id: data.user?.id,
          username: body.username,
          email: body.email,
          password: body.password,
          points: 0,
          role: 'student'
        }
      )
    } 
    return res.json({ data, error })

  } catch (error: any) {
    return res.json({ error: error.message })
  }
}
export default POST
