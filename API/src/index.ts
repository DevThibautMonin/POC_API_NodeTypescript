// Imports
import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { PokemonRouter } from "./routers/PokemonRouter"
import Database from "../src/data/Database"

dotenv.config();

// App variables
if (!process.env.PORT) {
    process.exit(1)
}

const PORT : number = parseInt(process.env.PORT as string, 10)
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api", PokemonRouter)

Database.sync().then(() => {
    console.log("Database logged on port :", process.env.DB_PORT)
}).catch((error) => {
    console.log("Error : ", error)
})

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})
