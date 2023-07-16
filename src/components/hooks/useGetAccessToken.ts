import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const useGetAccessToken = () => {
  const { toast } = useToast();
  useEffect(() => {
    const url = new URLSearchParams(window.location.href.split('#')[1]);
    const access_token = url.get('access_token');
    if (access_token) {
      sessionStorage.setItem('session', JSON.stringify(access_token));
      toast({
        title: 'Successfully logged in',
        description: '',
        variant: 'default',
      });
    }
  });
  return { refetch: useEffect };
};

export default useGetAccessToken;
