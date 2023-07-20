'use client';

import { Button } from '@/components/ui/button';
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
import { useSignup } from '@/components/hooks/useSignup';
import LeftHome from '@/components/auth/LeftHome';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';

const Signup = () => {
  const { form, onSubmit, isLoading } = useSignup();

  return (
    <div className="flex h-screen justify-center items-center ">
      <LeftHome />
      <div className="w-1/2 h-full mx-4 flex flex-col items-center justify-center lg:left-[50%] lg:mx-0 lg:w-1/2">
        <h1>Register</h1>
        <div className="flex w-full flex-col items-center border-b border-blue-700 border-opacity-[.07] py-8 lg:w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-blue-600 h-10 w-full">
                {isLoading ? (
                  <Loader2Icon
                    size={20}
                    color="#00ff04"
                    className="animate-spin inline"
                  />
                ) : (
                  'Register'
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm">
          <p>
            Already have account? &nbsp;
            <Link
              href="/auth/login"
              className="text-blue-500 self-center font-semibold text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
