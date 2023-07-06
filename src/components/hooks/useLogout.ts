import { redirect, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { getRedirectError } from 'next/dist/client/components/redirect'

export const useLogout = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setLoading(true)
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
        // setLoading(false)
        sessionStorage.removeItem('session')
        router.push('/auth/login')
        // redirect('/auth/login')
      } else {
        console.log(body.error);
        toast({
          title: body.error.message,
          variant: 'destructive',
        })
        setLoading(false)
      }
    } catch (error: any) {
      console.log(error);
      toast({
        title: error.message || 'Error occured',
        variant: 'destructive',
      })
      setLoading(false)
    }
  }
  return { onSubmit, loading }
}
