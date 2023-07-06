import {
  UpdatePointsMutation,
  UpdatePointsDocument,
} from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
interface QueryParams {
  id: string;
}

async function POST({ body }: { body: QueryParams }, res: any) {

  try {
    const userData: UpdatePointsMutation = await client.request(
      UpdatePointsDocument,
      {
        id: body,
        points: 10000,
      }
    );

    return res.json({ message: 'Successfully earned free points', userData });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}
export default POST;
