import { useEffect, useState } from 'react'
import { IUserReward } from '@/lib/types'
import getUserInfo from '@/lib/getUserInfo'

const useGetUserRewards = () => {
  const [userRewards, setUserRewards] = useState<IUserReward[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null|string>(null)

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const user = await getUserInfo();
        const response = await fetch(`/api/userRewards/${user?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch rewards')
        }

        const { rewards: { userRewards } } = await response.json()
        setUserRewards(userRewards)
        setLoading(false)
        console.log(userRewards);
      } catch (error) {
        console.log(error)
        setError('Internal Server Error')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { userRewards, loading, error }
}

export default useGetUserRewards
