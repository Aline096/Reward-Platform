import { supabase } from '@/lib/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    return res.status(200).json({ data, error });
  } catch (error) {
    console.log('Error signing in: ', error);
    throw error;
  }
}
