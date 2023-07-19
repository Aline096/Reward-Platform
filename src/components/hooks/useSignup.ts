import { zodResolver } from '@hookform/resolvers/zod';
import signupSchema from '@/validation/signupSchema';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const useSignup = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  async function signup(formData: FormData) {
    return await fetch('/api/users/signup', {
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
    mutationKey: ['signup'],
    mutationFn: signup,
  });

  const onSubmit = async (formData: FormData) => {
    const res = await mutation.mutateAsync(formData);
    if (res?.error)
      throw new Error(
        'User already exists, check if you have verified your email'
      );

    if (res.data.user?.identities?.length !== 0) {
      toast({
        title: 'Check your email for verification',
        description: '',
        variant: 'default',
      });
      router.push('/auth/login');
    } else {
      throw new Error('User already exists');
    }
  };
  return { form, onSubmit, isLoading: mutation.isLoading };
};
