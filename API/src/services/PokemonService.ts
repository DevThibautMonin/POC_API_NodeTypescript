// Imports
import { PokemonModel } from "../models/PokemonModel"

export default class PokemonService {
  static async findAllPokemons() : Promise<PokemonModel[]> {
    const pokemons : PokemonModel[] = await PokemonModel.findAll()

    return pokemons
  }

  static async findPokemon(id : number) : Promise<PokemonModel> {
    const pokemon : PokemonModel = await PokemonModel.findByPk(PokemonModel, id)

    return pokemon
  }

  static async createPokemon(newPokemon : PokemonModel) : Promise<PokemonModel> {

    const pokemon : PokemonModel = await PokemonModel.create({
      name : newPokemon.name,
      description : newPokemon.description,
      type : newPokemon.type,
      image : newPokemon.image
    })

    return pokemon
  }

}
