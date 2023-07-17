import { UpdatePointsMutation, UpdatePointsDocument, UpdateQuantityMutation, UpdateQuantityDocument } from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'
interface QueryParams {
  id: string
    quantity: number
    isAvailable: boolean
}

async function PATCH(req:any , res: any) {
  try {
    const rewardData: UpdateQuantityMutation = await client.request(
      UpdateQuantityDocument,
      {
        id: req.body.id,
        quantity: req.body.quantity,
        isAvailable: req.body.isAvailable
      }
    )

    return res.json({ message: 'Successfully updated reward availability', rewardData })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error', error })
  }
}
export default PATCH
