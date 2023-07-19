import { IReward } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

async function getRewards() {
  return await fetch('/api/rewards').then((res) => res.json());
}

const useGetRewards = () => {
  const [rewards, setRewards] = useState<IReward[]>([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['rewards'],
    queryFn: () => getRewards(),
  });

  useEffect(() => {
    if (data?.rewards) {
      const { rewards } = data;
      setRewards(rewards);
    }
  }, [data]);

  return {
    rewards,
    isLoading,
    error: data?.error?.message,
    refetch,
  };
};

export default useGetRewards;
