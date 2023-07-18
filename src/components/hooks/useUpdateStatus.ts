import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'

export const useUpdateStatus = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (userReward: any, status: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/userRewards/status`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id: userReward?.id,
          status: status,
        }),
      })
      const body = await response.json()
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
    }
  }
  return { onSubmit, loading }
}
