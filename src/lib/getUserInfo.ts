import jwtDecode from 'jwt-decode'
import { GetUserDocument, GetUserQuery } from '@/generated/graphql'
import { client } from '@/lib/graphqlClient'

const getUserInfo = async(
  session: string | null = sessionStorage.getItem('session')
) => {
  try {
    if (session === null) {
      return null
    }
    const userInfo:any = jwtDecode(session)
    const user: GetUserQuery = await client.request(GetUserDocument, {
      id: userInfo.sub,
    })  
    return user.users_by_pk
  } catch (error) {
    return null
  }
}

export default getUserInfo
