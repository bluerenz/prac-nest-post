import { Table, Model, Column, DataType, BelongsToMany,  } from "sequelize-typescript";
import { Car } from "src/cars/cars.model";
import { Order } from "src/orders/orders.model";


interface TarifCreationAttrs {
    costPerDay: number;
    kmPerDay: number;
}

@Table({tableName: 'tarifs'})
export class Tarif extends Model implements TarifCreationAttrs {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({type: DataType.INTEGER, unique: true})
    costPerDay: number

    @Column({type: DataType.INTEGER, unique: true})
    kmPerDay: number
    
    @BelongsToMany(() => Car, () => Order)
    cars: Car[]
}