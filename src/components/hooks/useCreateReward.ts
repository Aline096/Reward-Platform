'use client';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { cloudinaryService } from '@/lib/uploadImage';
import rewardSchema from '@/validation/rewardSchema';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  image: any;
  points: number;
  isAvailable: boolean;
  quantity: number;
}

export const useCreateReward = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [newImage, setNewImage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(rewardSchema),
    defaultValues: {
      name: '',
      image: '',
      points: 0,
      isAvailable: false,
      quantity: 0,
    },
  });

  const watchImage = watch('image');
  useEffect(() => {
    if (watchImage && watchImage.length === 1) {
      setNewImage(URL.createObjectURL(watchImage[0]));
    }
  }, [watchImage]);

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    const response = await cloudinaryService.upload(formData.image[0]);

    if (response.success === true) {
      const uploadedImage = response.fileUrl;
      formData.image = uploadedImage;

      try {
        const response = await fetch(`/api/rewards`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const body = await response.json();
        reset();
        toast({
          title: body.message,
          variant: 'default',
        });
        setLoading(false);
        router.push('/dashboard/rewards');
      } catch (error: any) {
        toast({
          title: error.message || 'Error occurred',
          variant: 'destructive',
        });
        setLoading(false);
      }
    } else {
      toast({
        title: 'Invalid Image',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isUploading,
    loading,
    errors,
    newImage,
  };
};
