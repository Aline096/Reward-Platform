import { supabase } from '@/lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next';

async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { error } = await supabase.auth.signOut()
    return res.status(200).json({ error });
} catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
export default POST
