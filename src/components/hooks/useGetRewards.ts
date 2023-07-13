import { useEffect, useState } from 'react'
import { IReward } from '@/lib/types'

const useGetRewards = () => {
  const [rewards, setRewards] = useState<IReward[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null|string>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/rewards`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch rewards')
        }

        const { rewards } = await response.json()
        setRewards(rewards)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError('Internal Server Error')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { rewards, loading, error }
}

export default useGetRewards