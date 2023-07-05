'use client'
import { useEffect, useState } from 'react'
import useGetRewards from '@/components/hooks/useGetRewards'
import { useDeleteReward } from '@/components/hooks/useDeleteReward'
import { useRouter } from 'next/navigation'
import { Loader2Icon, Plus, } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RewardsTable from '@/components/Rewards/RewardsTable'
import { IReward } from '@/lib/types'

const Rewards = () => {
  const { rewards, loading, error } = useGetRewards()
  const { handleRewardDelete, leftRewards: updatedRewards } = useDeleteReward()
  const [allRewards, setAllRewards] = useState<IReward[]>([])
  const route = useRouter()

  useEffect(() => {
    setAllRewards(rewards)
  }, [rewards])

  useEffect(() => {
    setAllRewards(updatedRewards)
  }, [updatedRewards])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Loader2Icon size={100} color="#00ff04" className="animate-spin inline" />
      </div>
    )
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  const handleUpdate = async (reward: any) => {
    route.push(`/dashboard/rewards/${reward.id}`)
  }

  return (
    <div>
      <div className="flex justify-end p-4">
        <Button
          onClick={() => {
            route.push('/dashboard/rewards/new')
          }}
        >
          <Plus />
          &nbsp; Create Reward
        </Button>
      </div>
      <div className="p-8">
        {allRewards.length === 0 ? (
          <p>No Rewards available.</p>
        ) : (
            <RewardsTable allRewards ={allRewards} handleUpdate={handleUpdate} handleRewardDelete={handleRewardDelete} setAllRewards={setAllRewards}
            />
        )}
      </div>
    </div>
  )
}

export default Rewards
