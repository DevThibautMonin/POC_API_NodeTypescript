// Imports
import express from "express"
import PokemonController from "../controllers/PokemonController"

export const PokemonRouter = express.Router()

// GET Pokemons
PokemonRouter.get("/", PokemonController.getPokemons)

// GET Pokemon
PokemonRouter.get("/:id", PokemonController.getPokemon)

// POST Pokemon
PokemonRouter.post("/", PokemonController.createPokemon)
