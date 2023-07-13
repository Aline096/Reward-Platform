import {
  UpdatePasswordDocument,
  UpdatePasswordMutation,
} from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import { hashSync } from 'bcryptjs';

interface Req {
  email: string;
  password: string;
}

async function POST({ body }: { body: Req }, res: any) {
  try {

    const user: UpdatePasswordMutation = await client.request(
      UpdatePasswordDocument,
      {
        email: body.email,
        encrypted_password: hashSync(body.password),
      }
    );
    
    return res.json({ user });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
}
export default POST;
