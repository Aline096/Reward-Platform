import { useEffect, useState } from 'react';
import { IUserReward } from '@/lib/types';
import getUserInfo from '@/lib/getUserInfo';
import { useQuery } from '@tanstack/react-query';

const useGetUserRewards = () => {
  const [userRewards, setUserRewards] = useState<IUserReward[]>([]);

  async function getUserRewards() {
    const user = await getUserInfo();
    return await fetch(`/api/userRewards/${user?.id}`).then((res) =>
      res.json()
    );
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user_rewards'],
    queryFn: () => getUserRewards(),
  });

  useEffect(() => {
    if (data?.rewards?.userRewards) {
      const {
        rewards: { userRewards },
      } = data;
      const userRewardsData = userRewards.map((item: IUserReward) => ({
        id: item.id,
        quantity: item.quantity,
        image: item.reward.image,
        name: item.reward.name,
        points: item.reward.points,
        status: item.status,
      }));
      setUserRewards(userRewardsData);
    }
  }, [data]);

  return {
    userRewards,
    isLoading,
    error: data?.error?.message,
  };
};

export default useGetUserRewards;
