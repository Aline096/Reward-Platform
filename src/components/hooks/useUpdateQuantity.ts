import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

export const useUpdateQuantity = (reward: any) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  let isAvailable: boolean = true

  const onSubmit = async (quantity: number) => {
    try {
      let leftQuantity
      if (reward?.quantity) {
        leftQuantity = reward?.quantity - quantity
        if (leftQuantity === 0) {
          isAvailable = false
        }
      }
      if (leftQuantity !== undefined) {
        setLoading(true)
        const response = await fetch(`/api/rewards/quantity`, {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
            'Api-Key': process.env.SUPABASE_KEY || '',
          },
          body: JSON.stringify({
            id: reward?.id,
            quantity: leftQuantity,
            isAvailable: isAvailable,
          }),
        })
        const body = await response.json()
        if (
          body?.rewardData?.update_rewards_by_pk?.quantity !== reward?.quantity
        ) {
          setLoading(false)
        }
      }
    } catch (error: any) {
      setLoading(false);
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
    }
  }
  return { onSubmit, loading }
}
