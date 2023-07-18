import { useEffect, useState } from 'react'
import { IUserReward } from '@/lib/types'

const useGetAllUserRewards = () => {
  const [userRewards, setUserRewards] = useState<IUserReward[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/userRewards/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch rewards')
      }
      const {
        rewards: { userRewards },
      } = await response.json()

      setUserRewards(userRewards)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('Internal Server Error')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { userRewards, loading, error, refetch:fetchData }
}

export default useGetAllUserRewards
