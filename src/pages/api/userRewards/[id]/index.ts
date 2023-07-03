import {
  GetUserRewardsQuery,
  GetUserRewardsDocument,
  RequestRewardDocument,
  RequestRewardMutation,
} from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'

interface QueryParams {
  id: string
  userId: string
  status: boolean
  reward: Reward
  quantity: number
}
interface Reward {
  id: string
  name: string
  image: string
  isAvailable: boolean
  quantity: number
  points: number
}

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    return handlePostRequest(req, res)
  } else if (req.method === 'GET') {
    return handleGetRequest(req,res)
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}

async function handleGetRequest(req:any,res: any) {

  try {
    const rewards: GetUserRewardsQuery = await client.request(
      GetUserRewardsDocument,
      {
        userId: req.query.id,
      }
    )

    return res.json({ message: 'Rewards retrieved successfully', rewards })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

async function handlePostRequest({ body }: { body: QueryParams }, res: any) {
  try {
    const userReward: RequestRewardMutation = await client.request(
      RequestRewardDocument,
      {
        userId: body.userId,
        rewardId: body.reward.id,
        status: 'pending',
        quantity: body.quantity,
      }
    )
    return res.status(200).json({ message: 'Reward Requested.', userReward })
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}
