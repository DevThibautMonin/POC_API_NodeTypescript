import { Request, Response } from "express"
import PokemonService from "../services/PokemonService"
import { PokemonModel } from "../models/PokemonModel"

export default class PokemonController {
  
  static async getPokemons(request : Request, response : Response) {
    try {
      const pokemons : PokemonModel[] = await PokemonService.findAllPokemons()

      response.status(200).send(pokemons)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  static async getPokemon(request : Request, response : Response) {
    const id : number = parseInt(request.params.id, 10)

    try {
      const pokemon : PokemonModel = await PokemonService.findPokemon(id)

      if (pokemon) {
          return response.status(200).send(pokemon)
      }

      return response.status(404).send("Pokemon not found")
      
    } catch (error) {
        response.send(500).send(error)
    }

  }

  static async createPokemon(request : Request, response : Response) {
    
    try {
      const pokemon : PokemonModel = request.body

      const newPokemon : PokemonModel = await PokemonService.createPokemon(pokemon)
      
      response.status(201).send(newPokemon)
    } catch (error) {
        response.status(500).send(error)
    }

  }

}
