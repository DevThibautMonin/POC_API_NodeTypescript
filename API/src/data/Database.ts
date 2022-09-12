import { Sequelize } from "sequelize-typescript"
import { PokemonModel } from "../models/PokemonModel"
import * as dotenv from "dotenv"

dotenv.config()

const Database = new Sequelize({
  dialect : "mysql",
  host : process.env.DB_HOST,
  username : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
  models : [PokemonModel]
})

export default Database
