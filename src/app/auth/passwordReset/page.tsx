'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useResetPassword } from '@/components/hooks/useResetPassword';
import LeftHome from '@/components/auth/LeftHome';
import { Loader2Icon } from 'lucide-react';

const ResetPassword = () => {
  const { form, onSubmit, loading } = useResetPassword();

  return (
    <div className="flex h-screen justify-center items-center ">
      <LeftHome />
      <div className="w-1/2 h-full mx-4 flex flex-col items-center justify-center lg:left-[50%] lg:mx-0 lg:w-1/2">
        <h1>RESET PASSWORD</h1>
        <div className="flex w-full flex-col items-center border-b border-blue-700 border-opacity-[.07] py-8 lg:w-3/5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 md:w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="New Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-600 h-10 w-full hover:bg-blue-400"
              >
                {loading ? (
                  <Loader2Icon
                    size={20}
                    color="#00ff04"
                    className="animate-spin inline"
                  />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
