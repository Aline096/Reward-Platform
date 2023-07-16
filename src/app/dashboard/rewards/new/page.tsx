'use client'
import { withAuth } from '@/app/auth/withAuth'
import { useCreateReward } from '@/components/hooks/useCreateReward'
import RewardForm from '@/components/Rewards/RewardForm'

const Rewards = () => {
  const { form, onSubmit, handleFileChange, isUploading,loading } = useCreateReward()

  return (
    <div>
      <div >
        <RewardForm
          form={form}
          onSubmit={onSubmit}
          handleFileChange={handleFileChange}
          isUploading={isUploading}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default withAuth(Rewards);
