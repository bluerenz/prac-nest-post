import { Table, Model, Column, DataType, HasMany  } from "sequelize-typescript";
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
    
    @HasMany(() => Order)
    orders: Order
}