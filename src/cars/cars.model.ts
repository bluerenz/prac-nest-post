import { BelongsToMany, Column, DataType, Model,Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";
import { Tarif } from "src/tarif/tarif.model";

interface CarCreationAttrs{
    Vin: number;
    brand: string;
    model: string;
    stateNumber: number
}

@Table({tableName:'Cars'})
export class Car extends Model implements CarCreationAttrs{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true })
    Vin: number;
    
    @Column({type: DataType.STRING, allowNull:false })
    brand: string;

    @Column({type: DataType.STRING, allowNull:false })
    model: string;

    @Column({type: DataType.INTEGER, unique: true })
    stateNumber: number;

    @Column({type: DataType.DATE, allowNull: true})
    lastOrderDate: Date;

    @BelongsToMany(() => Tarif, () => Order)
    tarifs: Tarif[]
}