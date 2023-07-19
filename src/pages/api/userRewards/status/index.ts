import { UpdateStatusDocument, UpdateStatusMutation } from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'

async function PATCH(req: any, res: any) {
  try {
    const userRewardData: UpdateStatusMutation = await client.request(
      UpdateStatusDocument,
      {
        id: req.body.id,
        status: req.body.status,
      }
    )
    return res.json({
      message: 'Successfully updated UserReward status',
      userRewardData,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error', error })
  }
}
export default PATCH
