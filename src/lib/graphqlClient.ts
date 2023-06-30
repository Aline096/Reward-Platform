import { GraphQLClient } from 'graphql-request'
import dotenv from 'dotenv'
dotenv.config()

const endpoint: string = process.env.HASURA_URL || ''
const adminSecret: string | undefined =
  process.env.ADMIN_SECRET || ''

export const client = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': adminSecret,
  },
})