'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUpdatePoints } from '@/components/hooks/useUpdatePoints';
import useGetRewards from '@/components/hooks/useGetRewards';
import { useGetUser } from '@/components/hooks/useGetUser';
import tip from '../../public/assets/images/icons8-tip.svg';
import { Badge } from '@/components/ui/badge';
import { Loader2Icon, PlusIcon } from 'lucide-react';
import useGetAccessToken from '@/components/hooks/useGetAccessToken';
import { withAuth } from './auth/withAuth';
import { NavigationMenuBar } from '@/components/Navigation/Menubar';
import useGetUserRewards from '@/components/hooks/useGetUserRewards';
import ClaimDialog from '@/components/Rewards/ClaimDialog'
import { useRequestReward } from '@/components/hooks/useRequestReward'

const Home: React.FC = () => {
  const [isUserRewards, setIsUserRewards] = useState(false);
  const [isAllRewards, setIsAllRewards] = useState(false);
  const { onSubmit, loading: loadPoints } = useUpdatePoints();
  const { userData, loading: loadUser, refetch: refetchUser } = useGetUser();
  const { rewards, loading: loadRewards,refetch:refetchRewards } = useGetRewards()
  const { userRewards, loading: loadUserRewards } = useGetUserRewards();
  const { refetch: fetchToken } = useGetAccessToken();
  fetchToken;
  const { handleClaimReward } = useRequestReward()
     useEffect(() => {
     refetchRewards()
   }, [refetchRewards])


  const renderPointsButton = () => (
    <Button
      type="button"
      className="bg-blue-600 m-5 h-10 hover:bg-blue-400"
      onClick={async () => {
        await onSubmit(10000,0);
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
      {loadPoints ? '' : 'Free Points'}
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

      {loadRewards || loadUserRewards ? (
        <Loader2Icon size={100} color="#00ff04" className="animate-spin" />
      ) : (
        <Table>
          <TableCaption>
            <Image width={22} height={22} alt={'Tip Icon'} src={tip}></Image>
            You can exchange the points you&lsquo;ve acquired for rewards!
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Reward</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Status</TableHead>
              {isUserRewards ? (
                ''
              ) : (
                <TableHead className="text-right">Request</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isUserRewards
              ? userRewards?.map((reward) => (
                  <TableRow key={reward?.id}>
                    <TableCell className="font-medium">
                      <Image
                        src={reward?.reward?.image}
                        alt="Thumbnail"
                        width={300}
                        height={300}
                        priority
                      />
                    </TableCell>
                    <TableCell>{reward?.reward?.name}</TableCell>
                    <TableCell>{reward?.quantity}</TableCell>
                    <TableCell>
                      {reward?.quantity * reward?.reward?.points} Total Pts
                    </TableCell>
                    <TableCell>
                      <Badge variant={'default'}>{reward?.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              : rewards?.map((reward) => (
                  <TableRow key={reward?.id}>
                    <TableCell className="font-medium">
                      <Image
                        src={reward?.image}
                        alt="Thumbnail"
                        width={300}
                        height={300}
                        priority
                      />
                    </TableCell>
                    <TableCell>{reward?.name}</TableCell>
                    <TableCell>{reward?.quantity}</TableCell>
                    <TableCell>{reward?.points} Pts/Unit</TableCell>
                    <TableCell>
                      {reward?.isAvailable ? (
                        <Badge variant={'default'}>Available</Badge>
                      ) : (
                        <Badge variant={'destructive'}>Unavailable</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {reward?.isAvailable ? (
                        <ClaimDialog
                          reward={reward}
                          handleClaimReward={handleClaimReward}
                          userData={userData}
                          refetch={refetchUser}
                          refetchRewards={refetchRewards}
                        />
                      ) : (
                        ''
                      )}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      )}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  )
}

export default withAuth(Home);
