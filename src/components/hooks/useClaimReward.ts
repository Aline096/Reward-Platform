import { useState } from "react"
import { useUpdatePoints } from "./useUpdatePoints"
import { useUpdateQuantity } from "./useUpdateQuantity"
import quantitySchema from "@/validation/rewardSchema copy"


const useClaimReward = (handleClaimReward:any, userId:string,reward:any) => {
  const [quantity, setQuantity] = useState<number>()
  const { onSubmit } = useUpdatePoints()
  const [inputError, setInputError] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const { onSubmit: updateQuantity, loading } = useUpdateQuantity(reward)

  

  const validateQuantity = (inputValue: number, maxQuantity: number) => {
    const schema = quantitySchema(maxQuantity)
    const validation = schema.safeParse({ quantity: inputValue })

    if (validation.success) {
      setInputError(null)
      setError(false)
    } else {
      setInputError(`Quantity must be between 1 and ${maxQuantity}`)
      setError(true)
    }
  }

  const handleClaim = async (reward: any) => {
    await handleClaimReward(userId, reward, quantity)
    }
    return{loading, setQuantity, validateQuantity, inputError,quantity, onSubmit, handleClaim, error,updateQuantity}
}

export default useClaimReward