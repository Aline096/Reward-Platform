import { zodResolver } from '@hookform/resolvers/zod'
import loginSchema from '@/validation/loginSchema'
import { useForm } from 'react-hook-form'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import getUserInfo from '@/lib/getUserInfo'

interface FormData {
  email: string
  password: string
}
export const useLogin = () => {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await fetch(`/api/users/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
        body: JSON.stringify(formData),
      })
      const body = await response.json()

      if (body.data?.user && body.data?.session) {
        const {
          data: {
            session: { access_token },
          },
        } = body
        sessionStorage.setItem('session', JSON.stringify(access_token))
        
        const userInfo = await getUserInfo()
        const userRole = userInfo?.role

        toast({
          title: 'Successfully logged in',
          description: '',
          variant: 'default',
        })

        if (userRole !== 'admin') {
          router.push('/')
        } else {
          router.push('/dashboard/rewards')
        }
      }

      if (body?.error) {
        toast({
          title: body.error.message,
          variant: 'destructive',
        })
      }
    } catch (error: any) {
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
    }
  }
  return { form, onSubmit }
}
