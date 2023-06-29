'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLogin } from '@/components/hooks/useLogin'
import LeftHome from '@/components/auth/LeftHome'


const Login = () => {
  const {form, onSubmit} = useLogin()

  return (
    <div className="flex h-screen justify-center items-center ">
      <LeftHome/>
      <div className="w-1/2 h-full mx-4 flex flex-col items-center justify-center lg:left-[50%] lg:mx-0 lg:w-1/2">
        <h1>LOGIN</h1>
        <div className="flex w-full flex-col items-center border-b border-blue-700 border-opacity-[.07] py-8 lg:w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      <Input type='password' placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-blue-600 h-10 w-full hover:bg-blue-400">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm">
          <p>
            Don&apos;t have account? &nbsp;
            <a
              href="/"
              className="text-blue-500 self-center font-semibold text-primary hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
