'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useUpdatePoints } from '@/components/hooks/useUpdatePoints';
import useGetRewards from '@/components/hooks/useGetRewards';
import { useGetUser } from '@/components/hooks/useGetUser';
import { Loader2Icon, PlusIcon } from 'lucide-react';
import useGetAccessToken from '@/components/hooks/useGetAccessToken';
import { withAuth } from './auth/withAuth';
import { NavigationMenuBar } from '@/components/Navigation/Menubar';
import useGetUserRewards from '@/components/hooks/useGetUserRewards';
import { DataTable } from '@/components/Rewards/Data-table';
import {
  allRewardsColumns,
  userRewardsColumns,
} from '@/components/Rewards/HomeColumns';

const Home: React.FC = () => {
  const [isUserRewards, setIsUserRewards] = useState(false);
  const [isAllRewards, setIsAllRewards] = useState(false);
  const { onSubmit, loading: loadPoints } = useUpdatePoints();
  const { userData, loading: loadUser, refetch: refetchUser } = useGetUser();
  const { rewards, isLoading } = useGetRewards();
  const { userRewards, isLoading: loadUserRewards } = useGetUserRewards();
  const { refetch: fetchToken } = useGetAccessToken();
  fetchToken;

  const renderPointsButton = () => (
    <Button
      type="button"
      className="bg-blue-600 m-5 h-10 hover:bg-blue-400"
      onClick={async () => {
        await onSubmit(10000, 0);
        refetchUser();
      }}
    >
      {loadPoints ? (
        <Loader2Icon
          size={20}
          color="#00ff04"
          className="animate-spin inline"
        />
      ) : (
        <PlusIcon />
      )}
      {!loadPoints && 'Free Points'}
    </Button>
  );

  const renderPointsText = () => {
    if (loadUser) {
      return (
        <Loader2Icon
          size={20}
          color="#00ff04"
          className="animate-spin inline"
        />
      );
    } else {
      return userData?.points ? userData.points : 'no';
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <NavigationMenuBar
        setIsAllRewards={setIsAllRewards}
        setIsUserRewards={setIsUserRewards}
      />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{renderPointsButton()}</TooltipTrigger>
          <TooltipContent>
            <p>Click here to earn free points</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="z-10 max-w-5xl p-5 items-center justify-between text-base font-extrabold">
        <p>
          You have <span>{renderPointsText()}</span> points
        </p>
      </div>

      {isUserRewards ? (
        <div className="container mx-auto py-10">
          {loadUserRewards ? (
            <div className="flex justify-center">
              <Loader2Icon
                size={60}
                color="#00ff04"
                className="animate-spin inline"
              />
            </div>
          ) : (
            <DataTable columns={userRewardsColumns} data={userRewards} />
          )}
        </div>
      ) : (
        <div className="container mx-auto py-10">
          {isLoading ? (
            <div className="flex justify-center">
              <Loader2Icon
                size={60}
                color="#00ff04"
                className="animate-spin inline"
              />
            </div>
          ) : (
            <DataTable columns={allRewardsColumns} data={rewards} />
          )}
        </div>
      )}
    </main>
  );
};

export default withAuth(Home);
