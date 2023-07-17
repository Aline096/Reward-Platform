import { useToast } from '@/components/ui/use-toast';
import getUserInfo from '@/lib/getUserInfo';
import { useState } from 'react';

export const useUpdatePoints = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false)
  const onSubmit = async (pointsToAdd:number, pointsToReduce:number) => {
    try {
      const user = await getUserInfo()
      let sum
      if (user?.points || user?.points === 0) {
        if (user?.points > pointsToReduce) {
          sum = user?.points + (pointsToAdd-pointsToReduce)
        }
      }
      if (sum) {
        setLoading(true)
        const response = await fetch(`/api/points`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
            'Api-Key': process.env.SUPABASE_KEY || '',
          },
          body: JSON.stringify({ id: user?.id, points: sum }),
        })
        const body = await response.json()
        if (body?.userData?.update_users_by_pk?.points !== user?.points) {
          setLoading(false)
        }
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
    }
  }
  return { onSubmit, loading };
};
