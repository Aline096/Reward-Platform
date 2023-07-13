import { useEffect, useState } from 'react'

const useGetReward = (rewardId:any) => {
  const [reward, setReward] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)


  useEffect(() => {
    const fetchReward = async () => {
      try {
        const response = await fetch(`/api/rewards/${rewardId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch reward')
        }

        const rewardData = await response.json()
        setReward(rewardData.reward)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError('Internal Server Error')
        setLoading(false)
      }
    }

    if (rewardId) {
      fetchReward()
    } else {
      setLoading(false)
    }
  }, [rewardId])

  return { reward, loading, error }
}

export default useGetReward
