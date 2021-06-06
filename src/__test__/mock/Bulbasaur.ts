import { GET_SINGLE_POKEMON } from '../../graphql/query/GetSinglePokemon'
const BalbasaurMock = {
  request: {
    query: GET_SINGLE_POKEMON,
    variables: { name: 'Bulbasaur' },
  },
  result: {
    data: {
      pokemon: {
        id: 'UG9rZW1vbjowMDE=',
        number: '001',
        name: 'Bulbasaur',
        weight: {
          minimum: '6.04kg',
          maximum: '7.76kg',
        },
        height: {
          minimum: '0.61m',
          maximum: '0.79m',
        },
        classification: 'Seed Pokémon',
        types: ['Grass', 'Poison'],
        resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
        weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
        fleeRate: 0.1,
        maxCP: 951,
        maxHP: 1071,
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        attacks: {
          fast: [
            {
              name: 'Tackle',
              type: 'Normal',
              damage: 12,
            },
            {
              name: 'Vine Whip',
              type: 'Grass',
              damage: 7,
            },
          ],
          special: [
            {
              name: 'Power Whip',
              type: 'Grass',
              damage: 70,
            },
            {
              name: 'Seed Bomb',
              type: 'Grass',
              damage: 40,
            },
            {
              name: 'Sludge Bomb',
              type: 'Poison',
              damage: 55,
            },
          ],
        },
        evolutions: [
          {
            name: 'Ivysaur',
          },
          {
            name: 'Venusaur',
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: 'Bulbasaur candies',
        },
      },
    },
  },
}
export default BalbasaurMock
