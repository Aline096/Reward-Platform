/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { IReward, IUserReward } from '@/lib/types';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import ClaimDialog from './ClaimDialog';
import { useGetUser } from '../hooks/useGetUser';
import { useRequestReward } from '../hooks/useRequestReward';
import useGetRewards from '../hooks/useGetRewards';

export const allRewardsColumns: ColumnDef<IReward>[] = [
  {
    accessorKey: 'image',
    header: 'Reward',
    cell: ({ row }) => {
      return (
        <Image
          alt="Thumbnail"
          src={row.getValue('image')}
          width={80}
          height={80}
          priority
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'points',
    header: () => <div className="text-right">Points/Unit</div>,
    cell: ({ row }) => {
      const points = parseFloat(row.getValue('points'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(points);

      return <div className="text-right font-medium">{formatted} Pts</div>;
    },
  },
  {
    accessorKey: 'isAvailable',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('isAvailable');
      return (
        <Badge variant={status ? 'default' : 'destructive'}>
          {status ? 'Available' : 'Unavailable'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'Request',
    cell: ({ row }) => {
      const { userData, refetch: refetchUser } = useGetUser();
      const { refetch: refetchRewards } = useGetRewards();
      const { handleClaimReward } = useRequestReward();
      const reward = row.original;

      return reward.isAvailable && userData?.id ? (
        <ClaimDialog
          reward={reward}
          handleClaimReward={handleClaimReward}
          userData={userData}
          refetch={refetchUser}
          refetchRewards={refetchRewards}
        />
      ) : (
        ''
      );
    },
  },
];

export const userRewardsColumns: ColumnDef<IUserReward>[] = [
  {
    accessorKey: 'image',
    header: 'Reward',
    cell: ({ row }) => {
      return (
        <Image
          alt="Thumbnail"
          src={row.getValue('image')}
          width={80}
          height={80}
          priority
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'points',
    header: () => <div className="text-right">Total Points</div>,
    cell: ({ row }) => {
      const points: number =
        (row.getValue('points') as number) *
        (row.getValue('quantity') as number);
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(points);

      return <div className="text-right font-medium">{formatted} Pts</div>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue('status');
      const uppercaseStatus = status.toUpperCase();
      return <Badge variant={'default'}>{uppercaseStatus}</Badge>;
    },
  },
];
