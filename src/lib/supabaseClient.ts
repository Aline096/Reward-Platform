import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.SUPABASE || ''
const supabaseKey: string = process.env.SUPABASE_KEY || ''
export const supabase = createClient(supabaseUrl, supabaseKey)
