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
import DeleteDialog from './DeleteDialog'
import { Edit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'


const RewardsTable = ({allRewards, handleUpdate, handleRewardDelete,setAllRewards}:any) => {
  return (
    <div>
      <Table>
        <TableCaption>List of rewards</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Reward</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Settings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allRewards?.map((reward: any) => (
            <TableRow key={reward?.id} className="h-32">
              <TableCell className="font-medium">
                <Image
                  src={reward.image}
                  alt="Thumbnail"
                  width={100}
                  height={30}
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
                <div className="flex justify-end">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => {
                      handleUpdate(reward)
                    }}
                  >
                    <Edit />
                  </button>
                  <button className="text-red-500">
                    <DeleteDialog
                      reward={reward}
                      handleRewardDelete={handleRewardDelete}
                      setAllRewards={setAllRewards}
                    />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RewardsTable
