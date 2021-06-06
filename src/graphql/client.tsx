import { ApolloClient, InMemoryCache } from '@apollo/client'
import { POKEMON_API_URL } from '../common/constant'

const client = new ApolloClient({
  name: 'apollo-pokemon',
  uri: POKEMON_API_URL,
  cache: new InMemoryCache(),
})

export default client
