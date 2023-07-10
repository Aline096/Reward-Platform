import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

export const useLogout = () => {
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async () => {
    try {
      const response = await fetch(`/api/users/logout`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          'Api-Key': process.env.SUPABASE_KEY || '',
        },
      })
      
      const body = await response.json()
      
      if (body?.error === null) {
        sessionStorage.removeItem('session')
        router.push('/auth/login')
      } else {
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
  return { onSubmit }
}
