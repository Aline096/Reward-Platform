'use client'
import { withAuth } from '@/app/auth/withAuth'
import { useCreateReward } from '@/components/hooks/useCreateReward'
import RewardForm from '@/components/Rewards/RewardForm'
import { checkAdminAccess } from '../../adminAccess'

const Rewards = () => {
  const {register, handleSubmit, onSubmit, isUploading,loading,errors, newImage } = useCreateReward()

  return (
    <div>
      <div >
        <RewardForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isUploading={isUploading}
          loading={loading}
          errors={errors}
          newImage={newImage}
        />
      </div>
    </div>
  )
}

export default withAuth(checkAdminAccess(Rewards));
