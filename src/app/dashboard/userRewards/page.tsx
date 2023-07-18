'use client'

import { withAuth } from "@/app/auth/withAuth"
import UserRewardsTable from "@/components/Rewards/UserRewardsTable"
import useGetAllUserRewards from "@/components/hooks/useGetAllUserRewards"
import { Loader2Icon } from "lucide-react"
import { useEffect } from "react"

const UserRewards = () => {
  const { userRewards, loading, error, refetch } = useGetAllUserRewards()
    useEffect(() => {
      refetch()
    }, [refetch])

   if (loading) {
     return (
       <div className="flex justify-center items-center h-full">
         <Loader2Icon
           size={100}
           color="#00ff04"
           className="animate-spin inline"
         />
       </div>
     )
   }

   if (error) {
     return <p>Error: {error}</p>
   }
  

   return (
     <div>
       <div className="p-8">
         {userRewards.length === 0 ? (
           <p>No Rewards available.</p>
         ) : (
           <UserRewardsTable
               userRewards={userRewards}
               refetch = {refetch}
           />
         )}
       </div>
     </div>
   )
}

export default withAuth(UserRewards);
