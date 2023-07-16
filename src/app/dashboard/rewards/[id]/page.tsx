'use client'
import { withAuth } from '@/app/auth/withAuth'
import RewardForm from '@/components/Rewards/RewardForm'
import useGetReward from '@/components/hooks/useGetReward'
import { useUpdateReward } from '@/components/hooks/useUpdateReward'
import { usePathname } from 'next/navigation'

const Rewards = () => {
  const pathname = usePathname()
  let id: string | undefined
  if (pathname !== null) {
    id = pathname.split('/').pop()
  }
  const { form, onSubmit, handleFileChange, isUploading,loading } = useUpdateReward(id)

  return (
    <div>
      <RewardForm
        type={'edit'}
        form={form}
        onSubmit={onSubmit}
        handleFileChange={handleFileChange}
        isUploading={isUploading}
        loading={loading}
      />
    </div>
  )
}

export default withAuth(Rewards);
