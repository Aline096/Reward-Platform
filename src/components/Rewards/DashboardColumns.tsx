/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { ArrowUpDown, Edit } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { IAllUserReward, IReward } from '@/lib/types';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import useGetRewards from '../hooks/useGetRewards';
import DeleteDialog from './DeleteDialog';
import { useDeleteReward } from '../hooks/useDeleteReward';
import { useRouter } from 'next/navigation';
import { useUpdateStatus } from '../hooks/useUpdateStatus';
import Settings from './Settings';
import useGetAllUserRewards from '../hooks/useGetAllUserRewards';

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
    header: 'Settings',
    cell: ({ row }) => {
      const route = useRouter();
      const { refetch } = useGetRewards();
      const { handleRewardDelete } = useDeleteReward();
      const reward = row.original;

      return (
        <div className="flex justify-end">
          <button
            className="text-blue-500 mr-2"
            onClick={() => {
              route.push(`/dashboard/rewards/${reward.id}`);
            }}
          >
            <Edit />
          </button>
          <button className="text-red-500">
            <DeleteDialog
              reward={reward}
              handleRewardDelete={handleRewardDelete}
              refetch={refetch}
            />
          </button>
        </div>
      );
    },
  },
];

export const allUserRewardsColumns: ColumnDef<IAllUserReward>[] = [
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
    accessorKey: 'username',
    header: 'User',
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
      return (
        <Badge
          className={`${
            status === 'approved'
              ? 'bg-green-500'
              : status === 'declined'
              ? 'bg-red-500'
              : ''
          }`}
        >
          {uppercaseStatus}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'Settings',
    cell: ({ row }) => {
      const reward = row.original;
      const { onSubmit } = useUpdateStatus();
      const { refetch } = useGetAllUserRewards();
      return <Settings onSubmit={onSubmit} reward={reward} refetch={refetch} />;
    },
  },
];
