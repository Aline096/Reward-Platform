import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from '@/validation/loginSchema';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import getUserInfo from '@/lib/getUserInfo';
import { useMutation } from '@tanstack/react-query';

interface FormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function login(formData: FormData) {
    return await fetch('/api/users/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        'Api-Key': process.env.SUPABASE_KEY || '',
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  }

  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });

  const onSubmit = async (formData: FormData) => {
    const res = await mutation.mutateAsync(formData);
    if (res.data?.user && res.data?.session) {
      const {
        data: {
          session: { access_token },
        },
      } = res;
      sessionStorage.setItem('session', JSON.stringify(access_token));

      const userInfo = await getUserInfo();
      const userRole = userInfo?.role;

      toast({
        title: 'Successfully logged in',
        description: '',
        variant: 'default',
      });

      if (userRole !== 'admin') {
        router.push('/');
      } else {
        router.push('/dashboard/rewards');
      }
    }

    if (res?.error) {
      toast({
        title: res.error.message,
        variant: 'destructive',
      });
    }
  };

  return { form, onSubmit, isLoading: mutation.isLoading };
};
