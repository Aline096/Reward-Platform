'use client';

import Image from 'next/image';
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
import { useLogin } from '@/components/hooks/useLogin';
import { useGoogleOauth } from '@/components/hooks/useGoogleOauth';
import googleIcon from '../../../../public/assets/images/google-icon.svg';
import { Separator } from '@/components/ui/separator';
import LeftHome from '@/components/auth/LeftHome';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';

const Login = () => {
  const { form, onSubmit, isLoading } = useLogin();
  const { googleHandler } = useGoogleOauth();

  return (
    <div className="flex h-screen justify-center items-center ">
      <LeftHome />
      <div className="w-1/2 h-full mx-4 flex flex-col items-center justify-center lg:left-[50%] lg:mx-0 lg:w-1/2">
        <h1>LOGIN</h1>
        <div className="flex w-full flex-col items-center border-b border-blue-700 border-opacity-[.07] py-8 lg:w-3/5">
          <Button
            className="flex justify-center items-center gap-4 p-2 rounded-md"
            onClick={googleHandler}
          >
            <Image
              src={googleIcon}
              alt="Google Icon"
              width={25}
              height={25}
              priority
            />
            Signin with google
          </Button>

          <span className="flex justify-center items-center gap-2 w-full text-muted-foreground">
            <Separator className="my-4 w-1/5" />
            <p className="text-sm">Or sigin with</p>
            <Separator className="my-4 w-1/5" />
          </span>

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
              <Button
                type="submit"
                className="bg-blue-600 h-10 w-full hover:bg-blue-400"
              >
                {isLoading ? (
                  <Loader2Icon
                    size={20}
                    color="#00ff04"
                    className="animate-spin inline"
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm">
          <Link
            href="/auth/passwordReset"
            className="text-blue-500 self-center font-semibold text-primary hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm">
          <p>
            Don&apos;t have account? &nbsp;
            <Link
              href="/auth/signup"
              className="text-blue-500 self-center font-semibold text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
