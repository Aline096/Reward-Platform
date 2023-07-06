import {
  InsertRewardMutation,
  InsertRewardDocument,
  GetRewardsQuery,
  GetRewardsDocument,
} from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'


export default async function createReward(req: any, res: any) {
  if (req.method === 'POST') {
    return handlePostRequest(req, res)
  } else if (req.method === 'GET') {
    return handleGetRequest(res)
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}

const handlePostRequest = async (req:any, res: any) => {  
  try {
    const reward: InsertRewardMutation = await client.request(
      InsertRewardDocument,
      {
        name: req.body.name,
        image: req.body.image,
        points: req.body.points,
        isAvailable: req.body.isAvailable,
        quantity: req.body.quantity,
      }
    )

    return res.json({ message: 'Successfully created a Reward', reward })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const handleGetRequest = async (res: any) => {
  try {
    const rewards: GetRewardsQuery = await client.request(GetRewardsDocument, {
      limit: 10,
      offset: 0,
    })
    return res.json({ message: 'Rewards retrieved successfully', rewards: rewards.rewards})
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}