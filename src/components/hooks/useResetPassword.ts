import { zodResolver } from '@hookform/resolvers/zod';
import passwordResetSchema from '@/validation/passwordResetSchema';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  password: string;
}
export const useResetPassword = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await fetch('/api/users/passwordReset', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
        body: JSON.stringify(formData),
      });

      const body = await response.json();

      if (body.user.update_auth_users.returning.length) {
        const { email } = body.user.update_auth_users.returning[0];
        if (email) {
          setLoading(false);
          router.push('/auth/login');
          toast({
            title: 'Successfully updated the password',
            variant: 'default',
          });
        }
      } else {
        toast({
          title: 'Wrong Email Address',
          variant: 'destructive',
        });
        setLoading(false);
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };
  return { form, onSubmit, loading };
};
