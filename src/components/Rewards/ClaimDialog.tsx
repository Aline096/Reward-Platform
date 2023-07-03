import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Loader2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import useClaimReward from '../hooks/useClaimReward'
import { toast } from '../ui/use-toast'

const ClaimDialog = ({ reward, handleClaimReward, userData, refetch,refetchRewards }: any) => {
  const {
    loading,
    setQuantity,
    validateQuantity,
    inputError,
    quantity,
    onSubmit,
    handleClaim,
    error,
    updateQuantity
  } = useClaimReward(handleClaimReward, userData.id,reward)

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          {loading ? (
            <Loader2Icon
              size={20}
              color="#00ff04"
              className="animate-spin inline"
            />
          ) : (
            <Button type="button" className="bg-blue-400 h-5 hover:bg-blue-600">
              Buy
            </Button>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Confirm to claim {reward.name} reward?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex gap-4 py-2">
                <div className='h-[60px] w-[230px]'>
                  <Input
                    className='h-8 py-1'
                    type="number"
                    onChange={(e) => {
                      setQuantity(parseInt(e.target.value))
                      validateQuantity(
                        parseInt(e.target.value),
                        reward.quantity
                      )
                    }}
                    onBlur={(e) => {}}
                  />
                  {inputError ? (
                    <p className="text-red-400 py-2">{inputError}</p>
                  ) : (
                    ''
                  )}
                </div>
                <div className='flex justify-center'>
                  <p>MAX {reward.quantity}</p>
                </div>
              </div>
              <div className="flex gap-2 p-2">
                <div>Total points</div>
                <div>
                  <p>{quantity ? quantity * reward.points : '0'}</p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                if (quantity) {
                  const pointsToReduce = reward.points * quantity
                  if (userData?.points && pointsToReduce <= userData?.points) {
                    await updateQuantity(quantity)
                    await onSubmit(0, pointsToReduce)
                    await handleClaim(reward)
                    await refetch()
                    await refetchRewards()
                  } else {
                    toast({
                      title:
                        "You don't have enough points to claim this reward.",
                      variant: 'destructive',
                    })
                  }
                }
              }}
              disabled={!quantity || error}
            >
              Claim
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default ClaimDialog
