'use client'
import { withAuth } from '@/app/auth/withAuth'
import RewardForm from '@/components/Rewards/RewardForm'
import { useUpdateReward } from '@/components/hooks/useUpdateReward'
import { usePathname } from 'next/navigation'

const Rewards = () => {
  const pathname = usePathname()
  let id: string | undefined
  if (pathname !== null) {
    id = pathname.split('/').pop()
  }
  const { register, handleSubmit, onSubmit, isUploading,loading, oldImage,errors,newImage } = useUpdateReward(id)

  return (
    <div>
      <RewardForm
        type={'edit'}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isUploading={isUploading}
        loading={loading}
        previewImage={oldImage}
        errors={errors}
        newImage={newImage}
      />
    </div>
  )
}

export default withAuth(Rewards);
