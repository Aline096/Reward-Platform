import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { useUpdateStatus } from '../hooks/useUpdateStatus'
import Settings from './Settings'

const UserRewardsTable = ({ userRewards, refetch }: any) => {
  const { onSubmit } = useUpdateStatus()
  return (
    <div>
      <Table>
        <TableCaption>List of User rewards</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Reward</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Settings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userRewards?.map((reward: any) => (
            <TableRow key={reward?.id} className="h-32">
              <TableCell className="font-medium">
                <Image
                  src={reward?.reward.image}
                  alt="Thumbnail"
                  width={100}
                  height={30}
                  priority
                />
              </TableCell>
              <TableCell>{reward?.reward.name}</TableCell>
              <TableCell>{reward?.quantity}</TableCell>
              <TableCell>{reward?.points} Pts/Unit</TableCell>
              <TableCell>{reward?.user.username}</TableCell>
              <TableCell>
                <Badge
                  className={`${
                    reward.status === 'approved'
                      ? 'bg-green-500'
                      : reward.status === 'declined'
                      ? 'bg-red-500'
                      : ''
                  }`}
                >
                  {reward?.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Settings
                  onSubmit={onSubmit}
                  reward={reward}
                  refetch={refetch}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserRewardsTable
