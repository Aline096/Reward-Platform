import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { cloudinaryService } from '@/lib/uploadImage'
import rewardSchema from '@/validation/rewardSchema'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import useGetReward from './useGetReward'

interface FormData {
  name: string
  image: string
  points: number
  isAvailable: boolean
  quantity: number
}

export const useUpdateReward = (id: string | undefined) => {
  const { toast } = useToast()
  const [file, setFile] = useState<string>('')
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { reward, loading: rewardLoading } = useGetReward(id) 
    const [oldImage, setOldImage] = useState<any>([])


  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(rewardSchema),
    defaultValues: {
      name: '',
      image: '',
      points: 0,
      isAvailable: false,
      quantity: 0,
    },
  })
   useEffect(() => {
     if (reward) {
       
       setOldImage(reward.image)
       form.setValue('name', reward.name)
       form.setValue('points', reward.points.toString())
       form.setValue('isAvailable', reward.isAvailable)
       form.setValue('quantity', reward.quantity.toString())
       form.setValue('image', oldImage)
     }
   }, [reward,form,oldImage])

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imageInput = event.target as HTMLInputElement
    if (imageInput.files !== null) {
      const image = imageInput.files[0]
      setIsUploading(true)
      const response = await cloudinaryService.upload(image)
      setFile(response.fileUrl)
      setIsUploading(false)
    }
  }

  const handleUpdateReward = async (reward: any) => {
    reward.id = id
    setLoading(true)
    try {
      const response = await fetch(`/api/rewards/${reward.id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(reward),
      })

      if (response.ok) {
        const body = await response.json()
        form.reset()
        toast({
          title: body.message,
          variant: 'default',
        })
        setLoading(false)
        router.push('/dashboard/rewards')
      } else {
        const body = await response.json()
        throw new Error(body.error || 'Failed to update reward')
      }
    } catch (error: any) {
      setLoading(false)
      toast({
        title: error.message || 'Error occurred',
        variant: 'destructive',
      })
    }
  }

  const onSubmit = async (formData: FormData) => {
    formData.image = file

    try {
      await handleUpdateReward(formData)
    } catch (error: any) {
      toast({
        title: error.message || 'Error occurred',
        variant: 'destructive',
      })
    }
  }

  return { form, onSubmit, handleFileChange, isUploading,loading }
}
