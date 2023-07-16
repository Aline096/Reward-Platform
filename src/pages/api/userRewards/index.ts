import {
  GetUserRewardsQuery,
  GetUserRewardsDocument,
} from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';

interface QueryParams {
  userId: string;
}

async function POST({ body }: { body: QueryParams }, res: any) {
  try {
    const rewards: GetUserRewardsQuery = await client.request(
      GetUserRewardsDocument,
      {
        userId: body.userId,
      }
    );
    
    return res.json({ message: 'Rewards retrieved successfully', rewards });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
export default POST;
