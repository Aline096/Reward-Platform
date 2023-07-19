import { useEffect, useState } from 'react';
import { IAllUserReward } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

async function getAllUserRewards() {
  return await fetch('/api/userRewards/').then((res) => res.json());
}

const useGetAllUserRewards = () => {
  const [allUserRewards, setAllUserRewards] = useState<IAllUserReward[]>([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['all_user_rewards'],
    queryFn: () => getAllUserRewards(),
  });

  useEffect(() => {
    if (data?.rewards) {
      const {
        rewards: { userRewards },
      } = data;
      const userRewardsData = userRewards.map((item: IAllUserReward) => ({
        id: item.id,
        image: item.reward.image,
        name: item.reward.name,
        quantity: item.quantity,
        points: item.reward.points,
        username: item.user.username,
        status: item.status,
      }));
      setAllUserRewards(userRewardsData);
    }
  }, [data]);

  return {
    userRewards: allUserRewards,
    isLoading,
    error: data?.error?.message,
    refetch,
  };
};

export default useGetAllUserRewards;
