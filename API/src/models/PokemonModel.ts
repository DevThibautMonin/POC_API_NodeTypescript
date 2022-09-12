import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps : false,
  tableName : "Pokemon"
})

export class PokemonModel extends Model {

  @Column({
    type : DataType.NUMBER,
    allowNull : false,
    autoIncrement: true,
    primaryKey: true
  })
  id! :number

  @Column({
    type : DataType.STRING,
    allowNull : false
  })
  name! : string

  @Column({
    type : DataType.STRING,
    allowNull : false
  })
  description! : string

  @Column({
    type : DataType.STRING,
    allowNull : false
  })
  type! : string

  @Column({
    type : DataType.STRING,
    allowNull : false
  })
  image! : string

}
