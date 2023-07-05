import { zodResolver } from '@hookform/resolvers/zod'
import signupSchema from '@/validation/signupSchema'
import { useForm } from 'react-hook-form'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

interface FormData {
  username: string
  email: string
  password: string
}
export const useSignup = () => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<FormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (formData: FormData) => {
    
    try {
      const response = await fetch(`/api/users/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
        body: JSON.stringify(formData),
      })
      const body = await response.json()
      if(body?.error) throw new Error('User already exists, check if you have verified your email')

      if (body.data.user?.identities?.length !== 0) {
        toast({
          title: 'Check your email for verification',
          description: '',
          variant: 'default',
        })
        router.push('/auth/login')
      } else {
        throw new Error('User already exists')
      }
      
    } catch (error: any) {
      toast({
        title: error.message|| 'error occured',
        variant: 'destructive',
      })
    }
  }
  return { form, onSubmit }
}
