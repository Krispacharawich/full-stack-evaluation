interface IAttack {
  name: string
  type: string
  damage: string
}

interface IPokemonDimension {
  minimum: string
  maximum: string
}

interface IPokemonAttack {
  fast: IAttack[]
  special: IAttack[]
}

export interface IPokemonEvolutionRequirement {
  amount: number
  name: string
}

export interface IPokemon {
  number: string
  name: string
  weight: IPokemonDimension
  height: IPokemonDimension
  classification: string
  types: string[]
  resistant: string[]
  attacks: IPokemonAttack
  weaknesses: string[]
  fleeRate: string
  maxCP: string
  maxHP: string
  evolutions: IPokemon[]
  evolutionRequirements: IPokemonEvolutionRequirement
  image: string
}
