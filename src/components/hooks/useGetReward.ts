import { IReward } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

async function getReward(rewardId: string) {
  return await fetch(`/api/rewards/${rewardId}`).then((res) => res.json());
}

const useGetReward = (rewardId: string) => {
  const [reward, setReward] = useState<IReward>();

  const { data, isLoading } = useQuery({
    queryKey: ['reward', rewardId],
    queryFn: () => getReward(rewardId),
  });

  useEffect(() => {
    if (data?.reward) {
      const { reward } = data;
      setReward(reward);
    }
  }, [data]);

  return { reward, isLoading, error: data?.error?.message };
};

export default useGetReward;
