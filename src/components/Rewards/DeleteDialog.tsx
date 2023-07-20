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
} from '@/components/ui/alert-dialog';
import { Loader2Icon, Trash2 } from 'lucide-react';
import { useState } from 'react';

const DeleteDialog = ({ reward, handleRewardDelete, refetch }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (reward: any) => {
    setLoading(true);
    await handleRewardDelete(reward);
    setLoading(false);
    refetch();
  };
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
            <Trash2 />
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this reward?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete reward
              data .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(reward)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDialog;
