import { GET_SINGLE_POKEMON } from '../../graphql/query/GetSinglePokemon'
const NotFoundMock = {
  request: {
    query: GET_SINGLE_POKEMON,
    variables: { name: 'Bulbasaurss' },
  },
  result: {
    data: {
      pokemon: null
    },
  },
}

export default NotFoundMock
