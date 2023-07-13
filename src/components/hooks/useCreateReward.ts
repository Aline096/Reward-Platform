'use client'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useToast } from '@/components/ui/use-toast'
import { cloudinaryService } from '@/lib/uploadImage'
import rewardSchema from '@/validation/rewardSchema'
import { useRouter } from 'next/navigation'

interface FormData {
  name: string
  image: string
  points: number
  isAvailable: boolean
  quantity: number
}

export const useCreateReward = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [file, setFile] = useState<string>('')
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState(null)

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
      setPreviewImage(response.fileUrl)
    }    
  }

  const onSubmit = async (formData: FormData) => {
    formData.image = file
    setLoading(true)
    console.log(previewImage);
    try {
      const response = await fetch(`/api/rewards`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const body = await response.json()
      console.log(body)
      form.reset()
      toast({
        title: body.message,
        variant: 'default',
      })
      setLoading(false)
      router.push('/dashboard/rewards')
    } catch (error: any) {
      toast({
        title: error.message || 'Error occurred',
        variant: 'destructive',
      })
      setLoading(false)
    }
  }
  return { form, onSubmit, handleFileChange, isUploading, loading, previewImage }
}
