import dotenv from "dotenv"
dotenv.config();

const config = {
  overwrite: true,
  schema: process.env.HASURA_URL,
  headers: {
    "x-hasura-admin-secret":  process.env.ADMIN_SECRET
},
  documents: 'src/graphql/*.graphql',
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
    },
  },
}

export default config
