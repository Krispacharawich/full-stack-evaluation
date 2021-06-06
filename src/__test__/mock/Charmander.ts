import { GET_SINGLE_POKEMON } from '../../graphql/query/GetSinglePokemon'
const CharmanderMock = {
  request: {
    query: GET_SINGLE_POKEMON,
    variables: { name: 'Charmander' },
  },
  result: {
    data: {
      pokemon: {
        id: 'UG9rZW1vbjowMDQ=',
        number: '004',
        name: 'Charmander',
        weight: {
          minimum: '7.44kg',
          maximum: '9.56kg',
        },
        height: {
          minimum: '0.53m',
          maximum: '0.68m',
        },
        classification: 'Lizard Pokémon',
        types: ['Fire'],
        resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
        weaknesses: ['Water', 'Ground', 'Rock'],
        fleeRate: 0.1,
        maxCP: 841,
        maxHP: 955,
        image: 'https://img.pokemondb.net/artwork/charmander.jpg',
        attacks: {
          fast: [
            {
              name: 'Ember',
              type: 'Fire',
              damage: 10,
            },
            {
              name: 'Scratch',
              type: 'Normal',
              damage: 6,
            },
          ],
          special: [
            {
              name: 'Flame Burst',
              type: 'Fire',
              damage: 30,
            },
            {
              name: 'Flame Charge',
              type: 'Fire',
              damage: 25,
            },
            {
              name: 'Flamethrower',
              type: 'Fire',
              damage: 55,
            },
          ],
        },
        evolutions: [
          {
            name: 'Charmeleon',
          },
          {
            name: 'Charizard',
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: 'Charmander candies',
        },
      },
    },
  },
}

export default CharmanderMock
