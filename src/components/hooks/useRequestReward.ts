import { useToast } from '@/components/ui/use-toast'
import { useCallback } from 'react'

export const useRequestReward = () => {
  const { toast } = useToast()

  const handleClaimReward = async (userId: string,reward:any,quantity:number) => {
    try {
      const response = await fetch(`/api/userRewards`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ userId,reward ,quantity}),
      })
      const body = await response.json()

      if (response.ok) {
        toast({
          title: body.message,
          description: '',
          variant: 'default',
        });
      } else {
        toast({
          title: 'Error claiming reward',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
    }
  }
  return { handleClaimReward }
}
