import { useToast } from '@/components/ui/use-toast';
import getUserInfo from '@/lib/getUserInfo';
import { useState } from 'react';

export const useUpdatePoints = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    try {
      setLoading(true)
      const user = await getUserInfo();
      const response = await fetch(`/api/points`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
        body: JSON.stringify(user?.id),
      });
      const body = await response.json();
      if (body?.userData?.update_users_by_pk?.points !== user?.points) {
        setLoading(false)
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      });
    }
  };
  return { onSubmit, loading };
};
