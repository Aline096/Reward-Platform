'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUpdatePoints } from '@/components/hooks/useUpdatePoints';
import useGetRewards from '@/components/hooks/useGetRewards';
import { useGetUser } from '@/components/hooks/useGetUser';
import { useLogout } from '@/components/hooks/useLogout';
import tip from '../../public/assets/images/icons8-tip.svg';
import { Badge } from '@/components/ui/badge';
import { LogOutIcon, Loader2Icon, PlusIcon } from 'lucide-react';
import useGetAccessToken from '@/components/hooks/useGetAccessToken';

const Home: React.FC = () => {
  const { onSubmit: logOut, loading: loadLogout } = useLogout();
  const { onSubmit, loading: loadPoints } = useUpdatePoints();
  const { userData, loading: loadUser, refetch } = useGetUser();
  const { rewards, loading: loadRewards } = useGetRewards();
  const { refetch: fetchToken } = useGetAccessToken();
  fetchToken;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        type="button"
        className="bg-blue-600 h-10 hover:bg-blue-400"
        onClick={async () => {
          await onSubmit();
          refetch();
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

      <div className="z-10 max-w-5xl p-5 items-center justify-between text-base font-extrabold">
        <p>
          You have{' '}
          <span>
            {loadUser ? (
              <Loader2Icon
                size={20}
                color="#00ff04"
                className="animate-spin inline"
              />
            ) : (
              userData?.points || 'no'
            )}
          </span>{' '}
          points
        </p>
      </div>

      <Button type="button" className="bg-blue-600 h-10 gap-2" onClick={logOut}>
        {loadLogout ? (
          <Loader2Icon
            size={20}
            color="#00ff04"
            className="animate-spin inline"
          />
        ) : (
          <LogOutIcon color="#ff8585" />
        )}
        {loadLogout ? '' : 'Logout'}
      </Button>

      {loadRewards ? (
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
              <TableHead className="text-right">Request</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rewards?.map((reward) => (
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
                    <Button
                      type="button"
                      className="bg-blue-400 h-5 hover:bg-blue-600"
                      // onClick={onSubmit}
                    >
                      Buy
                    </Button>
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
  );
};

export default Home;
