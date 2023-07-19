import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import useGetRewards from './useGetRewards'
import { IReward } from '@/lib/types'

export const useDeleteReward = () => {
  const { toast } = useToast()
  const [leftRewards, setLeftRewards] = useState<IReward[]>([])
  const [deleted, setDeleted] = useState(false)
  const { rewards } = useGetRewards()

  const handleRewardDelete = async (reward: any) => {
    
    try {
      const response = await fetch(`/api/rewards/${reward.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        
        // setLeftRewards(rewards)
         setLeftRewards((rewards:any) => {
         const updatedRewards = rewards.filter(
           (item: any) => item.id !== reward.id
         )
         setDeleted(true)
         console.log(deleted);
         return updatedRewards
       })

        toast({
          title: 'Reward deleted successfully',
          variant: 'default',
        })
        
      } else {
        const body = await response.json()
        throw new Error(body.error || 'Failed to delete reward')
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occurred',
        variant: 'destructive',
      })
    }
  }
   useEffect(() => {
     setLeftRewards(rewards)
   }, [rewards])

  return { handleRewardDelete, leftRewards, deleted }
}
