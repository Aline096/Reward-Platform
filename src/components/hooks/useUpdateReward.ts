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
  image: any
  points: number
  isAvailable: boolean
  quantity: number
}

export const useUpdateReward = (id: string | undefined) => {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { reward, loading: rewardLoading } = useGetReward(id)
  const [oldImage, setOldImage] = useState<any>([])
  const [newImage, setNewImage] = useState('')

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      image: oldImage,
      points: 0,
      isAvailable: false,
      quantity: 0,
    },
  })

  const watchImage = watch('image')
  useEffect(() => {
    if (watchImage && watchImage.length === 1) {
      setNewImage(URL.createObjectURL(watchImage[0]))
    }
  }, [watchImage])

  useEffect(() => {
    if (reward) {
      setOldImage(reward.image)
      setValue('name', reward.name)
      setValue('points', reward.points.toString())
      setValue('isAvailable', reward.isAvailable)
      setValue('quantity', reward.quantity.toString())
      setValue('image', oldImage)
    }
  }, [reward, setValue, oldImage])

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
        reset()
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
    let uploadedImage
    setLoading(true)

    if (typeof formData.image !== 'string') {
      setOldImage(URL.createObjectURL(formData.image[0]))
      const uploadImage = await cloudinaryService.upload(formData.image[0])
      uploadedImage = uploadImage.fileUrl
    } else {
      uploadedImage = oldImage
    }

    formData.image = uploadedImage
    try {
      await handleUpdateReward(formData)
    } catch (error: any) {
      toast({
        title: error.message || 'Error occurred',
        variant: 'destructive',
      })
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    isUploading,
    loading,
    oldImage,
    errors,
    newImage,
  }
}
