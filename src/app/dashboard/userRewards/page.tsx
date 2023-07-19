'use client'

import { withAuth } from "@/app/auth/withAuth"
import { allUserRewardsColumns } from "@/components/Rewards/DashboardColumns"
import { DataTable } from "@/components/Rewards/Data-table"
import useGetAllUserRewards from "@/components/hooks/useGetAllUserRewards"
import { Loader2Icon } from "lucide-react"

const UserRewards = () => {
  const { userRewards, isLoading, error } = useGetAllUserRewards()

   if (isLoading) {
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
        <DataTable key={'_one'} columns={allUserRewardsColumns} data={userRewards} />
       </div>
     </div>
   )
}

export default withAuth(UserRewards);
