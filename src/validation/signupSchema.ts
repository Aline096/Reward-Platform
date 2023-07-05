import { object, string } from 'zod'

const signupSchema = object({
  username: string().min(2),
  email: string().email(),
  password: string().min(4, {
    message: 'Password must have 6 or more characters',
  }),
})

export default signupSchema
