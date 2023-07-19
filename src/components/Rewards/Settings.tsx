import { useState } from 'react'
import { Button } from '../ui/button'
import { Loader2Icon } from 'lucide-react'

const Settings = ({ onSubmit, reward, refetch }: any) => {
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)

  return (
    <div className="flex gap-2">
      <Button
        className="bg-blue-500 px-2 py-1 h-[30px]"
        onClick={async () => {
          setSuccess(true)
          await onSubmit(reward, 'approved')
          await refetch()
          setSuccess(false)
        }}
      >
        {success ? (
          <Loader2Icon color="#00ff04" className="animate-spin inline" />
        ) : (
          'Approve'
        )}
      </Button>
      <Button
        className="bg-red-500 px-2 py-1 h-[30px]"
        onClick={async () => {
          setFail(true)
          await onSubmit(reward, 'declined')
          await refetch()
          setFail(false)
        }}
      >
        {fail ? (
          <Loader2Icon color="#00ff04" className="animate-spin inline" />
        ) : (
          'Decline'
        )}
      </Button>
    </div>
  )
}

export default Settings
