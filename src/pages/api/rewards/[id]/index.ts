import {
  DeleteRewardMutation,
  DeleteRewardDocument,
  UpdateRewardMutation,
  UpdateRewardDocument,
  GetSingleRewardQuery,
  GetSingleRewardDocument,
} from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'

export default async function handler(req: any, res: any) {
  if (req.method === 'PATCH') {
    return handlePatchRequest(req, res)
  } else if (req.method === 'DELETE') {
    return handleDeleteRequest(req, res)
  } else if (req.method === 'GET') {
    return handleGetSingleRewardRequest(req, res)
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}

const handlePatchRequest = async (req: any, res: any) => {
  
  try {
    const reward: UpdateRewardMutation = await client.request(
      UpdateRewardDocument,
      {
        id: req.query.id,
        name: req.body.name,
        image: req.body.image,
        isAvailable: req.body.isAvailable,
        points: req.body.points,
        quantity: req.body.quantity,
      }
    )

    return res.json({ message: 'Reward updated Successfully', reward })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const handleDeleteRequest = async (req: any, res: any) => {
  try {
    const reward: DeleteRewardMutation = await client.request(
      DeleteRewardDocument,
      {
        id: req.query.id,
      },
    )
    return res.json({
      message: 'Rewards deleted successfully',
      reward: reward,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const handleGetSingleRewardRequest = async (req: any, res: any) => {
  try {
    const reward: GetSingleRewardQuery = await client.request(
      GetSingleRewardDocument,
      {
        id: req.query.id,
      }
    )
    return res.json({
      message: 'Reward retrieved successfully',
      reward: reward.rewards_by_pk,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}