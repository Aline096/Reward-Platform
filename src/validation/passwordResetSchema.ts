import { object, string } from 'zod'

const passwordResetSchema = object({
  email: string().email(),
  password: string().min(4, {
    message: 'Password must have 4 or more characters',
  })
})

export default passwordResetSchema
