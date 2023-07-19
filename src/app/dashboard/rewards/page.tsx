'use client';

import useGetRewards from '@/components/hooks/useGetRewards';
import { useRouter } from 'next/navigation';
import { Loader2Icon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { withAuth } from '@/app/auth/withAuth';
import { DataTable } from '@/components/Rewards/Data-table';
import { allRewardsColumns } from '@/components/Rewards/DashboardColumns';
import { checkAdminAccess } from '../adminAccess';

const Rewards: React.FC = () => {
  const { rewards, isLoading, error } = useGetRewards();
  const route = useRouter();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2Icon
          size={100}
          color="#00ff04"
          className="animate-spin inline"
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="flex justify-end p-4">
        <Button
          onClick={() => {
            route.push('/dashboard/rewards/new');
          }}
        >
          <Plus />
          &nbsp; Create Reward
        </Button>
      </div>
      <div className="p-8">
        <DataTable columns={allRewardsColumns} data={rewards} />
      </div>
    </div>
  );
};

export default withAuth(checkAdminAccess (Rewards))
