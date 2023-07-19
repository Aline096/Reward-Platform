import { z } from 'zod'

const quantitySchema = (quantity: number) =>
  z.object({
    quantity: z
      .number()
      .min(1)
      .max(quantity)
      .transform((val) => ({
        value: val,
        message: `Quantity must be between 1 and ${quantity}`,
      })),
  })
export default quantitySchema
