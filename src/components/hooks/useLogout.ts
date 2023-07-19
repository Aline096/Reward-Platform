import { useRouter, redirect } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';

async function logout() {
  return await fetch('/api/users/logout', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Api-Key': process.env.SUPABASE_KEY || '',
    },
  }).then((res) => res.json());
}

export const useLogout = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['logout'],
    queryFn: logout,
    enabled: false,
  });

  const onSubmit = async () => {
    refetch();
    if (!data?.error) {
      sessionStorage.removeItem('session');
      router.refresh();
      toast({
        title: 'Successfully logged out',
        variant: 'default',
      });
      // redirect('/auth/login');
    } else if (data?.error) {
      toast({
        title: data?.error.message,
        variant: 'destructive',
      });
    }
  };

  return { onSubmit, isLoading: isFetching };
};
