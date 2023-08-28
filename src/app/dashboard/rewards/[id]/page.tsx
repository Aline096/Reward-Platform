'use client'
import { withAuth } from '@/app/auth/withAuth'
import RewardForm from '@/components/Rewards/RewardForm'
import { useUpdateReward } from '@/components/hooks/useUpdateReward'
import { usePathname } from 'next/navigation'
import { checkAdminAccess } from '../../adminAccess'

const Rewards = () => {
  const pathname = usePathname();
  const id = pathname !== null ? (pathname.split('/').pop() as string) : '';

  const {
    register,
    handleSubmit,
    onSubmit,
    isUploading,
    loading,
    oldImage,
    errors,
    newImage,
  } = useUpdateReward(id);

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
  );
};

export default withAuth(checkAdminAccess( Rewards));
