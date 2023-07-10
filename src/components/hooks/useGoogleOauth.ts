import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export const useGoogleOauth = () => {
  const { toast } = useToast();
  const router = useRouter();

  const googleHandler = async () => {
    try {
      const response = await fetch('/api/users/googleOauth', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
      });

      const {
        data: { url: redirect },
        error,
      } = await response.json();
      if (redirect) router.push(redirect);

      if (error) {
        toast({
          title: error.message,
          variant: 'destructive',
        });
      }

    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      });
    }
  };
  return { googleHandler };
};
