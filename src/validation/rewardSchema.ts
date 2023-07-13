import { z } from 'zod'

const rewardSchema = z.object({
  name: z.string().nonempty(),
  // image: z.string().url(),
  points: z.string().refine((value) => {
    const numberValue = parseInt(value)
    return !isNaN(numberValue) && numberValue > 0
  }, 'Must be a positive number'),
  isAvailable: z.boolean(),
  quantity: z.string().refine((value) => {
    const numberValue = parseInt(value)
    return !isNaN(numberValue) && numberValue > 0
  }, 'Must be a positive number'),
})
export default rewardSchema
